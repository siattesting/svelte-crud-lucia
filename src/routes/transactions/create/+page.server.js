import { redirect, fail } from '@sveltejs/kit';
import prisma from '$lib/server/prisma';

import { auth } from '$lib/server/lucia';

export const load = async ({ locals }) => {
	const session = await locals.auth.validate();
	if (!session) throw redirect(302, '/login');
	const partners = await prisma.partner.findMany();
	const transactions = await prisma.transaction.findMany({
		where: { authorId: session.user.userId },
		include: { partner: true, author: true }
	});

	return {
		userId: session.user.userId,
		username: session.user.username,
		partners,
		transactions
	};
};

export const actions = {
	create: async ({ request, locals }) => {
		const session = await locals.auth.validate();

		const formData = await request.formData();
		const title = formData.get('title');
		const content = formData.get('content');
		const amount = Number(formData.get('amount'));
		const category = formData.get('category');
		const partnerId = formData.get('partnerId');
		const authorId = session.user.userId;

		//errors array for validation
		const errors = { title: '', content: '', amount: '', partnerId: '' };
		if (typeof title !== 'string' || title.length < 1) {
			errors.title += 'Please enter a valid title. Title field must not be empty.';
		}
		if (typeof content !== 'string' || content.length < 1) {
			errors.content += 'Please enter a valid description. Content field must not be empty.';
		}
		if (typeof amount !== 'number' || amount == 0) {
			errors.amount += 'Please enter a valid amount as a numeric value.';
		}
		const hasErrors = Object.values(errors).some((msg) => msg);

		if (hasErrors) {
			return fail(422, { message: 'Missing or invalid information' });
		}

		try {
			let transaction = {
				id: crypto.randomUUID().toString(),
				title,
				content,
				amount,
				trans_category: category,
				partnerId,
				authorId
			};
			console.log(transaction);
			await prisma.transaction.create({ data: transaction });
		} catch (err) {
			console.error(err);
			return fail(422, {
				message: 'Could not create this transaction.',
				error: err.message
			});
		}
		throw redirect(303, '/transactions');
	}
};

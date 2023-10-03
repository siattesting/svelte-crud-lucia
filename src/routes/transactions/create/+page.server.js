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

		if (!title || !content || !amount || !category || !partnerId) {
			return fail(400, { message: 'Missing information' });
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
			// await createTransaction(transaction);
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

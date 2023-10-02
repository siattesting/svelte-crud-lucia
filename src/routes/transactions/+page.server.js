import { redirect, fail } from '@sveltejs/kit';

import { auth } from '$lib/server/lucia';
import { createTransaction } from '$lib/server/postgresdb';

export const load = async ({ locals }) => {
	const session = await locals.auth.validate();
	if (!session) throw redirect(302, '/login');

	return {
		userId: session.user.userId,
		username: session.user.username
	};
};

export const actions = {
	create: async ({ request, locals }) => {
		const formData = await request.formData();
		const title = formData.get('title');
		const content = formData.get('content');
		const amount = formData.get('amount');
		const category = formData.get('category');
		const partner = formData.get('partner');

		if (!title || !content || !amount || !category || !partner) {
			return fail(400, { message: 'Missing information' });
		}

		try {
			let transaction = {
				id: crypto.randomUUID().toString(),
				title,
				content,
				amount,
				category,
				partner
			};
			await createTransaction(transaction);
		} catch (err) {
			console.error(err);
			return fail(500, { message: 'Could not create this transaction.' });
		}
	}
};

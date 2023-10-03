import { getPartners } from '$lib/server/postgresdb';
import prisma from '$lib/server/prisma';
import { fail, redirect } from '@sveltejs/kit';

export const load = async ({ locals }) => {
	const session = await locals.auth.validate();
	if (!session) throw redirect(302, '/login');

	const partners = await getPartners();

	return {
		userId: session.user.userId,
		username: session.user.username,
		partners
	};
};

/** @type {import('./$types).Actions} */
export const actions = {
	create: async ({ request, locals }) => {
		const session = await locals.auth.validate();
		const authorId = session.user.userId;
		const data = await request.formData();

		const title = data.get('title');
		const content = data.get('content');

		if (!title) {
			return fail(400, {
				title,
				missing: true
			});
		}
		if (!content) {
			return fail(400, {
				content,
				missing: true
			});
		}

		try {
			let newPartner = {
				id: crypto.randomUUID().toString(),
				title,
				content
			};
			// await createTodo(newTodo);
			await prisma.partner.create({ data: newPartner });
		} catch (error) {
			console.error('Error: ', error);
		}
		throw redirect(303, `/partners`);
	}
};

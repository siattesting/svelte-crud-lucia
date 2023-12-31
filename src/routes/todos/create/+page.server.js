import prisma from '$lib/server/prisma';
import { fail, redirect } from '@sveltejs/kit';

export const load = async ({ locals }) => {
	const session = await locals.auth.validate();
	if (!session) throw redirect(302, '/login');

	return {
		userId: session.user.userId,
		username: session.user.username
	};
};

/** @type {import('./$types).Actions} */
export const actions = {
	default: async ({ request, locals }) => {
		const session = await locals.auth.validate();
		const authorId = session.user.userId;
		const data = await request.formData();

		const title = data.get('title');

		if (!title) {
			return fail(400, {
				title,
				missing: true
			});
		}

		try {
			let newTodo = {
				id: crypto.randomUUID().toString(),
				title,
				completed: false,
				authorId
			};
			// await createTodo(newTodo);
			await prisma.todo.create({ data: newTodo });
		} catch (error) {
			console.error('Error: ', error);
		}
		throw redirect(303, `/todos`);
	}
};

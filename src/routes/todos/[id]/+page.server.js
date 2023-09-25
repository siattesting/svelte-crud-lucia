import prisma from '$lib/server/prisma';
import { error, fail, redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals, params }) {
	const session = await locals.auth.validate();
	if (!session) throw redirect(302, '/login');

	const todo = await prisma.todo.findUnique({
		where: {
			id: params.id
		}
	});
	if (!todo) {
		throw error(404, 'Todo not found.');
	}

	return {
		userId: session.user.userId,
		username: session.user.username,
		todo: todo
	};
}

export const actions = {
	updateTodo: async ({ request, params }) => {
		const { title, completed } = Object.fromEntries(await request.formData());

		try {
			await prisma.todo.update({
				where: {
					id: params.id
				},
				data: {
					title,
					completed
				}
			});
		} catch (err) {
			console.error(err);
			return fail(500, { message: 'Could not update this todo.' });
		}
		throw redirect(303, `/todos/` + params.id);
	}
};

import { createTodo } from '$lib/server/postgresdb';
import { fail, redirect } from '@sveltejs/kit';

/** @type {import('./$types).Actions} */
export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		let title = data.get('title');
		let completed = data.get('completed');

		if (!title) {
			return fail(400, {
				title,
				completed,
				missing: true
			});
		}

		try {
			const newTodo = {
				id: crypto.randomUUID().toString(),
				title,
				completed
			};
			await createTodo(newTodo);
		} catch (error) {
			console.error('Error: ', error);
		}
		throw redirect(303, `/todos`);
	}
};

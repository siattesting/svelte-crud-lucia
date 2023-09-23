import prisma from '$lib/server/prisma.js';
import { fail, redirect } from '@sveltejs/kit';
import { randomUUID } from 'crypto';

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
			await prisma.todo.create({
				data: {
					id: randomUUID(),
					title,
					completed: false
				}
			});
		} catch (error) {
			console.error('Error: ', error);
		}
		throw redirect(303, `/todos`);
	}
};

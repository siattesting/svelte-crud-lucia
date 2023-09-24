import { redirect } from '@sveltejs/kit';

import { auth } from '$lib/server/lucia';

import prisma from '$lib/server/prisma.js';

export const load = async ({ locals }) => {
	const session = await locals.auth.validate();
	if (!session) throw redirect(302, '/login');

	const todos = await prisma.todo.findMany();

	return {
		userId: session.user.userId,
		username: session.user.username,
		todos: todos
	};
};

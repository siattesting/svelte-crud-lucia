import { redirect } from '@sveltejs/kit';

import { auth } from '$lib/server/lucia';

import * as PGdb from '$lib/server/postgresdb.js';

export const load = async ({ locals }) => {
	const session = await locals.auth.validate();
	if (!session) throw redirect(302, '/login');

	const todos = await PGdb.getTodos();

	return {
		userId: session.user.userId,
		username: session.user.username,
		todos
	};
};

import { redirect, fail } from '@sveltejs/kit';
import prisma from '$lib/server/prisma';

import { auth } from '$lib/server/lucia';

export const load = async ({ locals }) => {
	const session = await locals.auth.validate();
	if (!session) throw redirect(302, '/login');
	const partners = await prisma.partner.findMany();
	const mytransactions = await prisma.transaction.findMany({
		where: { authorId: session.user.userId },
		include: { partner: true, author: true }
	});
	const alltransactions = await prisma.transaction.findMany({
		include: { partner: true, author: true }
	});

	return {
		userId: session.user.userId,
		username: session.user.username,
		partners,
		mytransactions,
		alltransactions
	};
};

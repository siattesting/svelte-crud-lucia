import prisma from '$lib/server/prisma';
import { error, fail, redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals, params }) {
	const session = await locals.auth.validate();
	if (!session) throw redirect(302, '/login');

	const partner = await prisma.partner.findUnique({
		where: {
			id: params.id
		},
		include: { author: true, transactions: true }
	});
	if (!partner) {
		throw error(404, 'Partner not found.');
	}

	return {
		userId: session.user.userId,
		username: session.user.username,
		partner
	};
}

export const actions = {
	update: async ({ request, params }) => {
		const { title, content } = Object.fromEntries(await request.formData());

		try {
			await prisma.partner.update({
				where: {
					title: params.title
				},
				data: {
					title,
					content
				}
			});
		} catch (err) {
			console.error(err);
			return fail(500, { message: 'Could not update this partner.' });
		}
		throw redirect(303, `/partners`);
	}
};

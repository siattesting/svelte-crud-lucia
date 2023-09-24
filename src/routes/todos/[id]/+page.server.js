import prisma from '$lib/server/prisma';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	const todo = await prisma.todo.findUnique({
		where: {
			id: params.id
		}
	});

	return {
		todo
	};
}

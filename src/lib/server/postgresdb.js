// see jesperbyblund.com/blog
// https://jesperbylund.com/blog/building-a-blog-with-neon-serverless-database-and-both-nextjs-13-and-sveltekit/

import { DATABASE_URL } from '$env/static/private';
import postgres from 'postgres';

const sql = postgres(DATABASE_URL, {
	ssl: 'require'
});

export async function getTodos() {
	const todos = await sql`SELECT title, completed FROM Todo`;
	return todos;
}

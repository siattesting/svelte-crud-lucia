/* see jesperbyblund.com/blog
https://jesperbylund.com/blog/building-a-blog-with-neon-serverless-database-and-both-nextjs-13-and-sveltekit/
*/

import { DATABASE_URL } from '$env/static/private';
import postgres from 'postgres';

const sql = postgres(DATABASE_URL, {
	ssl: 'require'
});

export async function getTodos() {
	const todos = await sql`SELECT * FROM todo`;
	return todos;
}

export async function createTodo({ id, title, completed }) {
	const todos = await sql`
	insert into todo 
	(id, title, completed) 
	values (${id}, ${title}, ${completed}) 
	returning id, title, completed
	`;
	return todos;
}

export async function getTodo(todoId) {
	const todo = await sql`
	select * from todos where id = ${todoId}
	
	returning id, title, completed
	`;
	return todo;
}

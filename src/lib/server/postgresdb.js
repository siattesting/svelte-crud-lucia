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

export async function createTransaction({
	id,
	title,
	content,
	partnerId,
	trans_category,
	amount,
	authorId
}) {
	const transaction = await sql`
	insert into transaction 
	(id, title, content, amount, partnerId, trans_category, authorId) 
	values (${id}, ${title}, ${content}, ${amount}, ${partnerId}, ${trans_category},  ${authorId}) 
	returning id
	`;
	return transaction;
}

export async function getPartners() {
	const partners = await sql`
	select * from partner
	`;
	return partners;
}

export async function getTransactions() {
	const transactions = await sql`
	select * from transaction
	`;
	return transactions;
}

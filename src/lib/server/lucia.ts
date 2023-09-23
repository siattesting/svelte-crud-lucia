import { lucia } from 'lucia';
import { sveltekit } from 'lucia/middleware';
import { postgres as postgresAdapter } from '@lucia-auth/adapter-postgresql';
import { dev } from '$app/environment';
import postgres from 'postgres';
import { DATABASE_URL } from '$env/static/private';
// import { prisma } from '@lucia-auth/adapter-prisma';
// import { PrismaClient } from '@prisma/client';

// export const client = new PrismaClient();
const sql = postgres(DATABASE_URL, {
	ssl: 'require'
});

export const auth = lucia({
	env: dev ? 'DEV' : 'PROD',
	middleware: sveltekit(),
	// adapter: prisma(client),
	adapter: postgresAdapter(sql, {
		user: 'auth_user',
		key: 'user_key',
		session: 'user_session'
	}),

	getUserAttributes: (data) => {
		return {
			username: data.username
		};
	}
});

export type Auth = typeof auth;

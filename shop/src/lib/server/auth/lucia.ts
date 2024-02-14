import { Lucia } from 'lucia';
import { dev } from '$app/environment';
import { db } from '../db/db';
import { DrizzleSQLiteAdapter } from '@lucia-auth/adapter-drizzle';
import { sessionTable, userTable } from '../db/schema';
import { GitHub } from 'arctic';
import { GITHUB_CLIENT_SECRET, GITHUB_CLIENT_ID } from '$env/static/private';

export const adapter = new DrizzleSQLiteAdapter(db, sessionTable, userTable);

export const lucia = new Lucia(adapter, {
	sessionCookie: {
		attributes: {
			secure: !dev
		}
	},
	getUserAttributes: (attr) => {
		return {
			githubId: attr.githubId,
			username: attr.username,
			admin: attr.admin,
			createdAt: attr.createdAt,
			stripeId: attr.stripeId
		};
	}
});

declare module 'lucia' {
	interface Register {
		Lucia: typeof lucia;
		DatabaseUserAttributes: DatabaseUserAttributes;
	}
}

interface DatabaseUserAttributes {
	githubId: number;
	username: string;
	admin: boolean;
	createdAt: Date;
	stripeId: string;
}

export const github = new GitHub(GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET);

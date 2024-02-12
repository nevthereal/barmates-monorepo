import { Lucia } from 'lucia';
import { dev } from '$app/environment';
import { db } from '../db/db';
import { DrizzleSQLiteAdapter } from '@lucia-auth/adapter-drizzle';
import { sessionTable, userTable } from '../db/schema';

export const adapter = new DrizzleSQLiteAdapter(db, sessionTable, userTable);

export const lucia = new Lucia({
	adapter,
	sessionCookie: {
		attributes: {
			secure: !dev
		}
	}
});

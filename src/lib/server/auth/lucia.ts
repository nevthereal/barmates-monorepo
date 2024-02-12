import { Lucia } from 'lucia';
import { dev } from '$app/environment';
import { client } from '../db/db';

// export const adapter = new LibSQLAdapter(client, {
// 	session: 'sessions',
// 	user: 'users'
// });

// export const lucia = new Lucia({
// 	adapter,
// 	sessionCookie: {
// 		attributes: {
// 			secure: !dev
// 		}
// 	}
// });

import { Config } from 'drizzle-kit';
import 'dotenv/config';

export default {
	schema: './src/lib/server/db/schema.ts',
	out: './migrations',
	driver: 'turso',
	dbCredentials: {
		url: process.env.DB_URL ?? '',
		authToken: process.env.DB_AUTH_TOKEN
	},
	verbose: true
} satisfies Config;

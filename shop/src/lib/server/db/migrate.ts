import 'dotenv/config';
import { migrate } from 'drizzle-orm/libsql/migrator';
import { db, client } from '$lib/server/db/db';
// This will run migrations on the database, skipping the ones already applied
await migrate(db, { migrationsFolder: './migrations' });
// Don't forget to close the connection, otherwise the script will hang
client.close();

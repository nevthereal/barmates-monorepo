import { sqliteTable, int, text } from 'drizzle-orm/sqlite-core';
import { relations } from 'drizzle-orm';

export const userTable = sqliteTable('users', {
	id: text('id').primaryKey().notNull(),
	username: text('username'),
	email: text('email').notNull().unique(),
	githubId: int('github_id').unique(),
	admin: int('admin', { mode: 'boolean' }).default(false),
	premium: int('premium', { mode: 'boolean' }).default(false)
});

export const sessionTable = sqliteTable('sessions', {
	id: text('id').notNull().primaryKey(),
	userId: text('user_id')
		.notNull()
		.references(() => userTable.id),
	expiresAt: int('expires').notNull()
});

export const userRelation = relations(userTable, ({ many }) => ({
	sessions: many(sessionTable)
}));

export const sessionRelation = relations(sessionTable, ({ one }) => ({
	user: one(userTable, {
		fields: [sessionTable.userId],
		references: [userTable.id]
	})
}));

import { pgTable, uuid, text } from 'drizzle-orm/pg-core';
import { id, createdAt, updatedAt, name } from '../schemaHelper';
import { UserTable } from './user';
import { relations } from 'drizzle-orm';

export const ComponentTable = pgTable('components', {
  id: id,
  name: name,
  createdAt: createdAt,
  updatedAt: updatedAt,
  authorId: uuid('authorId').references(() => UserTable.id),
  code: text('code').notNull(),
  description: text('description'),
  imageUrl: text('imageUrl'),
});

export const ComponentRelations = relations(ComponentTable, ({ one }) => ({
  author: one(UserTable, {
    fields: [ComponentTable.authorId],
    references: [UserTable.id],
  }),
}));

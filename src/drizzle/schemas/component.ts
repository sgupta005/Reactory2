import { pgTable, uuid, text, pgEnum, boolean } from 'drizzle-orm/pg-core';
import { id, createdAt, updatedAt, name } from '../schemaHelper';
import { UserTable } from './user';
import { relations } from 'drizzle-orm';

export const fileTypeEnum = pgEnum('file_type', [
  'jsx',
  'tsx',
  'js',
  'ts',
  'css',
  'scss',
  'json',
  'other',
]);

export const ComponentTable = pgTable('components', {
  id: id,
  name: name,
  createdAt: createdAt,
  updatedAt: updatedAt,
  authorId: uuid('authorId').references(() => UserTable.id),
  description: text('description'),
  imageUrl: text('imageUrl'),
});

export const ComponentFilesTable = pgTable('component_files', {
  id: id,
  componentId: uuid('componentId').references(() => ComponentTable.id),
  fileName: text('fileName').notNull(),
  content: text('content').notNull(),
  fileType: fileTypeEnum('fileType').notNull(),
  isEntryFile: boolean('isEntryFile').default(false),
  createdAt: createdAt,
  updatedAt: updatedAt,
});

export const ComponentRelations = relations(
  ComponentTable,
  ({ one, many }) => ({
    author: one(UserTable, {
      fields: [ComponentTable.authorId],
      references: [UserTable.id],
    }),
    files: many(ComponentFilesTable),
  })
);

export const ComponentFilesRelations = relations(
  ComponentFilesTable,
  ({ one }) => ({
    component: one(ComponentTable, {
      fields: [ComponentFilesTable.componentId],
      references: [ComponentTable.id],
    }),
  })
);

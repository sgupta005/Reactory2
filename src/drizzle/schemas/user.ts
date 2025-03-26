import { pgTable, varchar } from 'drizzle-orm/pg-core';
import { id, createdAt, updatedAt } from '../schemaHelper';

export const UserTable = pgTable('users', {
  id: id,
  name: varchar('name', { length: 255 }),
  email: varchar('email', { length: 255 }).notNull().unique(),
  password: varchar('password', { length: 255 }),
  createdAt: createdAt,
  // updatedAt: updatedAt,
});

import { uuid, timestamp } from 'drizzle-orm/pg-core';

export const id = uuid('id').primaryKey().defaultRandom();

export const createdAt = timestamp('created_at', {
  withTimezone: true,
}).defaultNow();

export const updatedAt = timestamp('updated_at', {
  withTimezone: true,
})
  .defaultNow()
  .$onUpdate(() => new Date());

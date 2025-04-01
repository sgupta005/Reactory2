import {
  pgTable,
  varchar,
  timestamp,
  text,
  integer,
  primaryKey,
  uuid,
} from 'drizzle-orm/pg-core';
import { id, createdAt, name } from '../schemaHelper';
import { relations } from 'drizzle-orm';
import { ComponentTable } from './component';

export const UserTable = pgTable('users', {
  id: id,
  name: name,
  email: varchar('email', { length: 255 }).notNull().unique(),
  emailVerified: timestamp('emailVerified', { mode: 'date' }),
  image: text('image'),
  password: varchar('password', { length: 255 }),
  createdAt: createdAt,
});

export const AccountTable = pgTable(
  'account',
  {
    userId: uuid('userId')
      .notNull()
      .references(() => UserTable.id, { onDelete: 'cascade' }),
    type: text('type').notNull(),
    provider: text('provider').notNull(),
    providerAccountId: text('providerAccountId').notNull(),
    refresh_token: text('refresh_token'),
    access_token: text('access_token'),
    expires_at: integer('expires_at'),
    token_type: text('token_type'),
    scope: text('scope'),
    id_token: text('id_token'),
    session_state: text('session_state'),
  },
  (account) => ({
    compoundKey: primaryKey({
      columns: [account.provider, account.providerAccountId],
    }),
  })
);

export const SessionTable = pgTable('session', {
  sessionToken: text('sessionToken').primaryKey(),
  userId: uuid('userId')
    .notNull()
    .references(() => UserTable.id, { onDelete: 'cascade' }),
  expires: timestamp('expires', { mode: 'date' }).notNull(),
});

export const VerificationTokenTable = pgTable(
  'verificationToken',
  {
    identifier: text('identifier').notNull(),
    token: text('token').notNull(),
    expires: timestamp('expires', { mode: 'date' }).notNull(),
  },
  (vt) => ({
    compoundKey: primaryKey({ columns: [vt.identifier, vt.token] }),
  })
);

export const UserRelations = relations(UserTable, ({ many }) => ({
  components: many(ComponentTable),
}));

export const users = UserTable;
export const accounts = AccountTable;
export const sessions = SessionTable;
export const verificationTokens = VerificationTokenTable;

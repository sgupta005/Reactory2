import { db } from '@/drizzle/db';
import { UserTable } from '@/drizzle/schemas/user';
import { ComponentTable } from '@/drizzle/schemas/component';
import { eq, desc, sql } from 'drizzle-orm';

// Get user profile data by userId
export async function getUserById(userId: string) {
  const user = await db
    .select({
      id: UserTable.id,
      name: UserTable.name,
      email: UserTable.email,
      image: UserTable.image,
      createdAt: UserTable.createdAt,
    })
    .from(UserTable)
    .where(eq(UserTable.id, userId))
    .limit(1);

  return user[0] || null;
}

// Get user's components by userId
export async function getUserComponents(userId: string) {
  const components = await db
    .select({
      id: ComponentTable.id,
      name: ComponentTable.name,
      description: ComponentTable.description,
      imageUrl: ComponentTable.imageUrl,
      createdAt: ComponentTable.createdAt,
    })
    .from(ComponentTable)
    .where(eq(ComponentTable.authorId, userId))
    .orderBy(desc(ComponentTable.createdAt));

  return components;
}

// Count user's components
export async function countUserComponents(userId: string) {
  const result = await db
    .select({ count: sql<number>`count(*)` })
    .from(ComponentTable)
    .where(eq(ComponentTable.authorId, userId));

  return result[0]?.count || 0;
}

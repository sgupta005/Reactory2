import { db } from '@/drizzle/db';
import { ComponentTable } from '@/drizzle/schemas/component';
import { UserTable } from '@/drizzle/schemas/user';
import { eq, desc, sql } from 'drizzle-orm';

export async function getRecentComponents(limit: number = 10) {
  const components = await db
    .select({
      id: ComponentTable.id,
      name: ComponentTable.name,
      description: ComponentTable.description,
      imageUrl: ComponentTable.imageUrl,
      createdAt: ComponentTable.createdAt,
      author: {
        id: UserTable.id,
        name: UserTable.name,
        image: UserTable.image,
      },
    })
    .from(ComponentTable)
    .leftJoin(UserTable, eq(ComponentTable.authorId, UserTable.id))
    .orderBy(desc(ComponentTable.createdAt))
    .limit(limit);

  return components;
}

export async function getPopularComponents(limit: number = 10) {
  return getRecentComponents(limit);
}

import { db } from '@/drizzle/db';
import {
  ComponentTable,
  ComponentFilesTable,
} from '@/drizzle/schemas/component';
import { UserTable } from '@/drizzle/schemas/user';
import { eq } from 'drizzle-orm';

export async function getComponentById(componentId: string) {
  // Get component with author details
  const component = await db
    .select({
      id: ComponentTable.id,
      name: ComponentTable.name,
      description: ComponentTable.description,
      imageUrl: ComponentTable.imageUrl,
      createdAt: ComponentTable.createdAt,
      author: {
        id: UserTable.id,
        name: UserTable.name,
        email: UserTable.email,
        image: UserTable.image,
      },
    })
    .from(ComponentTable)
    .leftJoin(UserTable, eq(ComponentTable.authorId, UserTable.id))
    .where(eq(ComponentTable.id, componentId))
    .limit(1);

  return component[0] || null;
}

export async function getComponentFiles(componentId: string) {
  // Get all files for the component
  const files = await db
    .select({
      id: ComponentFilesTable.id,
      fileName: ComponentFilesTable.fileName,
      content: ComponentFilesTable.content,
      isEntryFile: ComponentFilesTable.isEntryFile,
    })
    .from(ComponentFilesTable)
    .where(eq(ComponentFilesTable.componentId, componentId))
    .orderBy(ComponentFilesTable.fileName);

  return files;
}

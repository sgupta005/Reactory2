import {
  ComponentFilesTable,
  ComponentTable,
} from '@/drizzle/schemas/component';
import { db } from '@/drizzle/db';

export async function createComponentFile(
  componentFile: typeof ComponentFilesTable.$inferSelect
) {
  const [newComponentFile] = await db
    .insert(ComponentFilesTable)
    .values(componentFile)
    .returning();
  if (newComponentFile == null)
    throw new Error('Failed to create component file');
  return newComponentFile;
}

export async function createComponent(
  component: typeof ComponentTable.$inferSelect
) {
  const [newComponent] = await db
    .insert(ComponentTable)
    .values(component)
    .returning();
  if (newComponent == null) throw new Error('Failed to create component');
  return newComponent;
}

'use server';

import { z } from 'zod';
import { submitComponentSchema } from './schema';
import { createComponent, createComponentFile } from './db';
import { auth } from '@/lib/auth';

import {
  ComponentFilesTable,
  ComponentTable,
} from '@/drizzle/schemas/component';

// Define possible return types
type SubmitResult =
  | { success: true; componentId: string }
  | { error: true; message: string };

export async function submitComponent(
  unsafeData: z.infer<typeof submitComponentSchema>
): Promise<SubmitResult> {
  const { data, success } = submitComponentSchema.safeParse(unsafeData);
  if (!success) {
    return {
      error: true,
      message: 'There was an error while parsing your component data.',
    };
  }

  try {
    // Get the current user
    const session = await auth();
    if (!session?.user?.id) {
      return {
        error: true,
        message: 'You must be logged in to submit a component.',
      };
    }

    // Create the component
    const component = await createComponent({
      name: data.name,
      description: data.description,
      authorId: session.user.id,
      imageUrl: null,
    } as typeof ComponentTable.$inferSelect);

    // Create component files
    const filePromises = Object.entries(data.files).map(
      async ([fileName, fileData]) => {
        const isEntryFile =
          fileName === 'index.js' ||
          fileName === 'index.tsx' ||
          fileName === 'main.jsx' ||
          fileName === 'main.tsx';

        return createComponentFile({
          componentId: component.id,
          fileName,
          content: fileData.code,
          isEntryFile,
        } as typeof ComponentFilesTable.$inferSelect);
      }
    );

    await Promise.all(filePromises);

    return { success: true, componentId: component.id };
  } catch (error) {
    console.error('Error submitting component:', error);
    return {
      error: true,
      message:
        'An internal server error occurred while submitting your component.',
    };
  }
}

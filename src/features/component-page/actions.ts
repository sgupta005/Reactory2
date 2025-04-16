'use server';

import { getComponentById, getComponentFiles } from './db';

// Define the file format type
type FileFormat = {
  code: string;
};

export type ComponentWithFiles = {
  component: Awaited<ReturnType<typeof getComponentById>> | null;
  files: Record<string, FileFormat>;
  error?: string;
};

export async function getComponentData(
  componentId: string
): Promise<ComponentWithFiles> {
  try {
    if (!componentId) {
      return {
        component: null,
        files: {},
        error: 'Component ID is required',
      };
    }

    // Fetch component and files in parallel
    const [component, filesArray] = await Promise.all([
      getComponentById(componentId),
      getComponentFiles(componentId),
    ]);

    if (!component) {
      return {
        component: null,
        files: {},
        error: 'Component not found',
      };
    }

    // Transform files array into {fileName: {code: content}} format
    const files: Record<string, FileFormat> = {};
    filesArray.forEach((file) => {
      files[file.fileName] = { code: file.content };
    });

    return {
      component,
      files,
    };
  } catch (error) {
    console.error('Error fetching component data:', error);
    return {
      component: null,
      files: {},
      error: 'Failed to fetch component data',
    };
  }
}

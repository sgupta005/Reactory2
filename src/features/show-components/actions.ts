'use server';

import { getRecentComponents, getPopularComponents } from './db';

export type ComponentCardType = {
  id: string;
  title: string;
  description: string | null;
  author: {
    name: string;
    image: string;
  };
  hearts: number;
  views: number;
};

/**
 * Server action to fetch components by type (popular/recent)
 * @param type Filter type - 'popular' or 'new'
 * @returns Formatted components ready for display
 */
export async function getComponents(
  type: 'popular' | 'new' = 'popular'
): Promise<ComponentCardType[]> {
  try {
    // Fetch components based on the type
    const components =
      type === 'popular'
        ? await getPopularComponents(10)
        : await getRecentComponents(10);

    // Format components to match the ComponentCard props
    return components.map((component) => ({
      id: component.id,
      title: component.name,
      description: component.description || 'No description provided',
      author: {
        name: component.author?.name || 'Anonymous',
        image: component.author?.image || '',
      },
      // Generate placeholder metrics
      // In a real app, these would come from a views/likes table
      hearts: Math.floor(Math.random() * 1000),
      views: Math.floor(Math.random() * 10000),
    }));
  } catch (error) {
    console.error('Error fetching components:', error);
    return [];
  }
}

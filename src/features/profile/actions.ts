'use server';

import { getUserById, getUserComponents, countUserComponents } from './db';
import { auth } from '@/lib/auth';

// Type definitions for the profile data
export type ProfileUser = {
  id: string;
  name: string;
  email: string;
  image: string | null;
  createdAt: Date | null;
  joinedDate: Date | null; // Renamed from createdAt for UI consistency
  bio: string; // Placeholder
  totalViews: number; // Placeholder
  totalHearts: number; // Placeholder
  followers: number; // Placeholder
  following: number; // Placeholder
  componentsCount: number; // Real data
};

export type ProfileComponent = {
  id: string;
  title: string; // Mapped from name
  description: string | null;
  hearts: number; // Placeholder
  views: number; // Placeholder
  author: {
    id: string;
    name: string;
    image: string | null;
  };
};

export async function getProfileData(userId: string) {
  try {
    // Get user data
    const userData = await getUserById(userId);
    if (!userData) {
      return { error: 'User not found' };
    }

    // Get component count
    const componentsCount = await countUserComponents(userId);

    // Get current session for checking if it's the user's own profile
    const session = await auth();
    const isOwnProfile = session?.user?.id === userId;
    const isLoggedIn = !!session?.user;

    // Create profile user object with real and placeholder data
    const user: ProfileUser = {
      id: userData.id,
      name: userData.name || 'Anonymous User',
      email: userData.email,
      image: userData.image,
      createdAt: userData.createdAt,
      joinedDate: userData.createdAt, // Use createdAt as joinedDate
      bio: 'This is a placeholder bio. It will be replaced with real data later.', // Placeholder
      totalViews: 2300, // Placeholder
      totalHearts: 567, // Placeholder
      followers: 124, // Placeholder
      following: 89, // Placeholder
      componentsCount,
    };

    return {
      user,
      isOwnProfile,
      isLoggedIn,
    };
  } catch (error) {
    console.error('Error fetching profile data:', error);
    return { error: 'Failed to fetch profile data' };
  }
}

export async function getProfileComponents(userId: string) {
  try {
    // Get user data for author info
    const userData = await getUserById(userId);
    if (!userData) {
      return { error: 'User not found' };
    }

    // Get components
    const components = await getUserComponents(userId);

    // Format components with placeholder metrics
    const formattedComponents: ProfileComponent[] = components.map(
      (component) => ({
        id: component.id,
        title: component.name,
        description: component.description,
        hearts: Math.floor(Math.random() * 200), // Placeholder
        views: Math.floor(Math.random() * 1000), // Placeholder
        author: {
          id: userData.id,
          name: userData.name || 'Anonymous User',
          image: userData.image,
        },
      })
    );

    return { components: formattedComponents };
  } catch (error) {
    console.error('Error fetching profile components:', error);
    return { error: 'Failed to fetch profile components' };
  }
}

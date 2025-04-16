import { useState, useEffect } from 'react';
import {
  getProfileData,
  getProfileComponents,
  ProfileUser,
  ProfileComponent,
} from '../actions';

export function useProfile(userId: string) {
  const [profileData, setProfileData] = useState<{
    user: ProfileUser | null;
    isOwnProfile: boolean;
    isLoggedIn: boolean;
    error?: string;
  }>({
    user: null,
    isOwnProfile: false,
    isLoggedIn: false,
  });

  const [components, setComponents] = useState<{
    data: ProfileComponent[];
    isLoading: boolean;
    error?: string;
  }>({
    data: [],
    isLoading: true,
  });

  // Fetch profile data
  useEffect(() => {
    async function fetchProfileData() {
      try {
        const result = await getProfileData(userId);
        if ('error' in result) {
          setProfileData((prev) => ({ ...prev, error: result.error }));
        } else {
          setProfileData({
            user: result.user,
            isOwnProfile: result.isOwnProfile,
            isLoggedIn: result.isLoggedIn,
          });
        }
      } catch (error) {
        console.error('Error in useProfile hook:', error);
        setProfileData((prev) => ({
          ...prev,
          error: 'Failed to load profile data',
        }));
      }
    }

    if (userId) {
      fetchProfileData();
    }
  }, [userId]);

  // Fetch components data
  useEffect(() => {
    async function fetchComponentsData() {
      setComponents((prev) => ({ ...prev, isLoading: true }));

      try {
        const result = await getProfileComponents(userId);
        if ('error' in result) {
          setComponents({
            data: [],
            isLoading: false,
            error: result.error,
          });
        } else {
          setComponents({
            data: result.components,
            isLoading: false,
          });
        }
      } catch (error) {
        console.error('Error fetching profile components:', error);
        setComponents({
          data: [],
          isLoading: false,
          error: 'Failed to load components',
        });
      }
    }

    if (userId) {
      fetchComponentsData();
    }
  }, [userId]);

  return {
    user: profileData.user,
    isOwnProfile: profileData.isOwnProfile,
    isLoggedIn: profileData.isLoggedIn,
    profileError: profileData.error,
    components: components.data,
    componentsLoading: components.isLoading,
    componentsError: components.error,
  };
}

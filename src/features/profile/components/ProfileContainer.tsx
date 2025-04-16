'use client';

import { useProfile } from '../hooks/useProfile';
import ProfileHeader from './ProfileHeader';
import ProfileStats from './ProfileStats';
import ProfileComponents from './ProfileComponents';
import { useParams } from 'next/navigation';

export default function ProfileContainer() {
  const params = useParams<{ id: string }>();
  const userId = params.id;

  const {
    user,
    isOwnProfile,
    isLoggedIn,
    profileError,
    components,
    componentsLoading,
    componentsError,
  } = useProfile(userId);

  if (profileError) {
    return (
      <div className="text-center py-10 text-destructive">{profileError}</div>
    );
  }

  if (!user) {
    return (
      <div className="flex justify-center items-center h-64">
        Loading profile...
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <ProfileHeader
        isOwnProfile={isOwnProfile}
        user={user}
        isLoggedIn={isLoggedIn}
      />

      <ProfileStats user={user} />

      <ProfileComponents isOwnProfile={isOwnProfile} components={components} />
    </div>
  );
}

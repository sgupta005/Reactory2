import ProfileContainer from '@/features/profile/components/ProfileContainer';

async function ProfilePage() {
  return (
    <main className="flex-1 w-full max-w-7xl mx-auto px-4 md:px-6 pt-8 pb-20">
      <ProfileContainer />
    </main>
  );
}

export default ProfilePage;

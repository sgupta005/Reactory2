import { auth } from '@/lib/auth';
import { Navbar } from '@/components/Navbar';

import ProfileHeader from '@/features/profile/components/ProfileHeader';
import ProfileStats from '@/features/profile/components/ProfileStats';
import ProfileComponents from '@/features/profile/components/ProfileComponents';

// Sample data - would be replaced with real data from API
const SAMPLE_USER = {
  id: '1',
  name: 'React Master',
  image: '',
  bio: 'UI/UX developer focused on creating beautiful and functional React components. I love to share what I create with the community.',
  followers: 342,
  following: 125,
  joinedDate: '2023-04-12',
  totalViews: 28550,
  totalHearts: 1250,
  componentsCount: 24,
};

const SAMPLE_COMPONENTS = [
  {
    id: 'responsive-navbar',
    title: 'Responsive Navbar',
    description: 'Clean and responsive navigation with mobile menu',
    author: 'ReactMaster',
    hearts: 482,
    views: 4200,
  },
  {
    id: 'data-table',
    title: 'Data Table',
    description: 'Sortable and filterable table component with pagination',
    author: 'ReactMaster',
    hearts: 593,
    views: 6800,
  },
  {
    id: 'modal-dialog',
    title: 'Modal Dialog',
    description: 'Accessible modal with animations and backdrop',
    author: 'ReactMaster',
    hearts: 347,
    views: 3500,
  },
  {
    id: 'form-builder',
    title: 'Form Builder',
    description: 'Dynamic form with validation and custom inputs',
    author: 'ReactMaster',
    hearts: 268,
    views: 2900,
  },
  {
    id: 'notification-toast',
    title: 'Notification Toast',
    description: 'Customizable toast notifications with auto-dismiss',
    author: 'ReactMaster',
    hearts: 425,
    views: 4800,
  },
  {
    id: 'theme-switcher1',
    title: 'Theme Switcher',
    description: 'Dark/light mode toggle with system preference detection',
    author: 'ReactMaster',
    hearts: 312,
    views: 3200,
  },
  {
    id: 'theme-switcher2',
    title: 'Theme Switcher',
    description: 'Dark/light mode toggle with system preference detection',
    author: 'ReactMaster',
    hearts: 312,
    views: 3200,
  },
  {
    id: 'theme-switcher3',
    title: 'Theme Switcher',
    description: 'Dark/light mode toggle with system preference detection',
    author: 'ReactMaster',
    hearts: 312,
    views: 3200,
  },
  {
    id: 'theme-switcher4',
    title: 'Theme Switcher',
    description: 'Dark/light mode toggle with system preference detection',
    author: 'ReactMaster',
    hearts: 312,
    views: 3200,
  },
  {
    id: 'theme-switcher5',
    title: 'Theme Switcher',
    description: 'Dark/light mode toggle with system preference detection',
    author: 'ReactMaster',
    hearts: 312,
    views: 3200,
  },
  {
    id: 'theme-switcher6',
    title: 'Theme Switcher',
    description: 'Dark/light mode toggle with system preference detection',
    author: 'ReactMaster',
    hearts: 312,
    views: 3200,
  },
];

async function ProfilePage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string }>;
}) {
  const session = await auth();
  const { id } = await searchParams;
  const isOwnProfile = id === session?.user?.id;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 md:px-6 pt-8 pb-20">
        <ProfileHeader isOwnProfile={isOwnProfile} user={SAMPLE_USER} />
        <ProfileStats user={SAMPLE_USER} />
        <ProfileComponents
          isOwnProfile={isOwnProfile}
          components={SAMPLE_COMPONENTS}
        />
      </main>
    </div>
  );
}

export default ProfilePage;

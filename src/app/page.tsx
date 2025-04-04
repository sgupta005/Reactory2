import { Navbar } from '@/components/Navbar';

import { Hero } from '@/components/Hero';
import { ComponentGrid } from '@/features/show-components/components/ComponentGrid';

// Mock data for demonstration purposes
const newComponents = [
  {
    id: '1',
    title: 'Motion Card',
    description:
      'A beautiful card component with smooth animations and transitions.',
    upvotes: 245,
    views: 1205,
    imageUrl:
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=500&auto=format&fit=crop',
  },
  {
    id: '2',
    title: 'Gradient Button',
    description: 'Modern button with gradient background and hover effects.',
    upvotes: 189,
    views: 982,
    imageUrl:
      'https://images.unsplash.com/photo-1545559054-3b0a3e58cd27?q=80&w=500&auto=format&fit=crop',
  },
  {
    id: '3',
    title: 'Image Gallery',
    description: 'Responsive image gallery with lightbox functionality.',
    upvotes: 132,
    views: 754,
    imageUrl:
      'https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=500&auto=format&fit=crop',
  },
  {
    id: '4',
    title: 'Notification Toast',
    description:
      'Customizable toast notifications with different styles and positions.',
    upvotes: 98,
    views: 632,
    imageUrl:
      'https://images.unsplash.com/photo-1579547945413-497e1b99dac0?q=80&w=500&auto=format&fit=crop',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col ">
      <Navbar />
      <main className="flex-1 ">
        <Hero />
        <ComponentGrid
          title="New Components"
          components={newComponents}
          id="new-components"
        />
        <ComponentGrid
          title="Most Popular"
          components={newComponents}
          id="popular-components"
        />
      </main>
    </div>
  );
}

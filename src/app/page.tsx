import { Hero } from '@/components/Hero';
import { ComponentGrid } from '@/features/show-components/components/ComponentGrid';

export default function Home() {
  return (
    <main className="flex-1 px-6 md:px-12 max-w-7xl mx-auto w-full pt-16 md:pt-24">
      <Hero />
      <ComponentGrid />
    </main>
  );
}

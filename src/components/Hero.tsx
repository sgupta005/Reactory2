'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Hero() {
  const scrollToComponents = () => {
    const element = document.getElementById('new-components');
    if (element) {
      const navbarHeight = 60;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="relative w-full h-[calc(100vh-65px)] flex items-center justify-center bg-gradient-to-b from-background to-muted/50">
      <div
        className={cn(
          'absolute inset-0',
          '[background-size:40px_40px]',
          '[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]',
          'dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]'
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />

      <div className="container px-4 md:px-6 absolute z-10">
        <div className="flex flex-col items-center space-y-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >
            <p className="bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
              Your One Stop Destination for React Components.
            </p>
            <p className="font-semibold text-primary/60 sm:text-3xl text-xl mt-6">
              Find the best React components for your next project and share
              your own with others.
            </p>
          </motion.div>
          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Button
              size="lg"
              className="h-12 px-8 cursor-pointer"
              onClick={scrollToComponents}
            >
              Browse Components
            </Button>
            <Link href="/submit/name">
              <Button
                variant="outline"
                size="lg"
                className="h-12 px-8 cursor-pointer"
              >
                Submit Your Component
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
      <motion.div
        className="absolute bottom-2 left-0 right-0 flex justify-center animate-bounce sm:bottom-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <Button
          variant="ghost"
          size="icon"
          onClick={scrollToComponents}
          className="cursor-pointer"
        >
          <ArrowDown />
        </Button>
      </motion.div>
    </section>
  );
}

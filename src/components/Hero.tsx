'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

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
    <section className="w-full min-h-[calc(100vh-64px)] flex items-center justify-center bg-gradient-to-b from-background to-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl md:max-w-[900px] mx-auto leading-[1.1]">
              <span className="text-foreground/80 font-semibold">
                Your One Stop Destination for
              </span>
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent block mt-2 font-bold">
                React Components.
              </span>
            </h1>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl mt-6">
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
            <Link href="/submit">
              <Button
                variant="outline"
                size="lg"
                className="h-12 px-8 cursor-pointer"
              >
                Submit Your Component
              </Button>
            </Link>
          </motion.div>
          <motion.div
            className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <Button variant="ghost" size="icon" onClick={scrollToComponents}>
              <ArrowDown />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

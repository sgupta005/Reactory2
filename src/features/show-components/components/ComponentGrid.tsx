'use client';

import { ComponentCard } from '@/features/show-components/components/ComponentCard';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface Component {
  id: string;
  title: string;
  description: string;
  upvotes: number;
  views: number;
  imageUrl: string;
}

interface ComponentGridProps {
  title: string;
  components: Component[];
  id?: string;
}

export function ComponentGrid({ title, components, id }: ComponentGridProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section id={id} className="py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-background via-muted/20 to-background opacity-50 pointer-events-none" />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex items-center justify-between mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
          </motion.div>

          <motion.button
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ x: 3 }}
          >
            View all
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {components.map((component) => (
            <ComponentCard
              key={component.id}
              id={component.id}
              title={component.title}
              description={component.description}
              upvotes={component.upvotes}
              views={component.views}
              imageUrl={component.imageUrl}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

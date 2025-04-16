'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ComponentCard } from '@/features/show-components/components/ComponentCard';
import * as motion from 'motion/react-client';
import { useState, useEffect } from 'react';
import { getComponents, ComponentCardType } from '../actions';

export function ComponentGrid() {
  const [filterType, setFilterType] = useState<'popular' | 'new'>('popular');
  const [components, setComponents] = useState<ComponentCardType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchComponents() {
      setIsLoading(true);
      try {
        const data = await getComponents(filterType);
        setComponents(data);
      } catch (error) {
        console.error('Failed to fetch components:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchComponents();
  }, [filterType]);

  const handleFilterChange = (value: string) => {
    setFilterType(value as 'popular' | 'new');
  };

  return (
    <>
      <motion.div
        className="mt-16 flex overflow-x-auto gap-2 justify-start"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Select value={filterType} onValueChange={handleFilterChange}>
          <SelectTrigger className="px-4 cursor-pointer">
            <SelectValue placeholder="Filter by" />
          </SelectTrigger>
          <SelectContent className="cursor-pointer">
            <SelectItem value="popular">Popular</SelectItem>
            <SelectItem value="new">New</SelectItem>
          </SelectContent>
        </Select>
      </motion.div>
      <motion.div
        className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-20 auto-rows-fr"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        {isLoading ? (
          // Show loading placeholders
          Array.from({ length: 6 }).map((_, index) => (
            <div
              key={`skeleton-${index}`}
              className="rounded-xl border border-border h-[300px] animate-pulse bg-muted"
            />
          ))
        ) : components.length > 0 ? (
          // Show real components
          components.map((component, index) => (
            <ComponentCard
              key={component.id}
              id={component.id}
              title={component.title}
              description={component.description || ''}
              author={component.author}
              hearts={component.hearts}
              views={component.views}
              index={index}
            />
          ))
        ) : (
          // Show no components message
          <div className="col-span-3 text-center py-12 text-muted-foreground">
            No components found.
          </div>
        )}
      </motion.div>
    </>
  );
}

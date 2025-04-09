'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ComponentCard } from '@/features/show-components/components/ComponentCard';
import { motion } from 'framer-motion';

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
    author: 'DataViz',
    hearts: 593,
    views: 6800,
  },
  {
    id: 'modal-dialog',
    title: 'Modal Dialog',
    description: 'Accessible modal with animations and backdrop',
    author: 'UIExpert',
    hearts: 347,
    views: 3500,
  },
  {
    id: 'form-builder',
    title: 'Form Builder',
    description: 'Dynamic form with validation and custom inputs',
    author: 'FormCrafter',
    hearts: 268,
    views: 2900,
  },
  {
    id: 'notification-toast',
    title: 'Notification Toast',
    description: 'Customizable toast notifications with auto-dismiss',
    author: 'Notifier',
    hearts: 425,
    views: 4800,
  },
  {
    id: 'theme-switcher',
    title: 'Theme Switcher',
    description: 'Dark/light mode toggle with system preference detection',
    author: 'ThemeWizard',
    hearts: 312,
    views: 3200,
  },
];

export function ComponentGrid() {
  return (
    <>
      <motion.div
        className="mt-16 flex overflow-x-auto gap-2 justify-start"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Select defaultValue="popular">
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
        {SAMPLE_COMPONENTS.map((component, index) => (
          <ComponentCard
            key={component.id}
            id={component.id}
            title={component.title}
            description={component.description}
            author={component.author}
            hearts={component.hearts}
            views={component.views}
            index={index}
          />
        ))}
      </motion.div>
    </>
  );
}

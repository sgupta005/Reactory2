'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Reactory from '@/components/Reactory';
export function Navbar() {
  return (
    <motion.header
      className="sticky top-0 z-50 w-full border-b border-border/40 backdrop-blur bg-background/70"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="py-4 px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Reactory />
        </div>

        <div className="flex items-center gap-4 ">
          <Link href="/sign-in">
            <Button className="rounded-4xl font-semibold" size="lg">
              Sign In
            </Button>
          </Link>
        </div>
      </div>
    </motion.header>
  );
}

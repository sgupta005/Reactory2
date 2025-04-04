'use client';

import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';

export function Navbar() {
  return (
    <motion.header
      className="sticky top-0 z-50 w-full border-b backdrop-blur bg-background/70"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-foreground/80">
              Reactory
            </span>
          </Link>
        </div>

        <div className="relative w-full max-w-sm mx-4">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search components..." className="pl-8 w-full" />
        </div>

        <div className="flex items-center gap-4 ">
          <Link href="/sign-in">
            <Button variant="outline" className="cursor-pointer" size="sm">
              Sign In
            </Button>
          </Link>
        </div>
      </div>
    </motion.header>
  );
}

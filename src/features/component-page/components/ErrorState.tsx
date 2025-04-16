'use client';

import { AlertTriangle } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

type ErrorStateProps = {
  message?: string;
};

export default function ErrorState({
  message = 'Component not found',
}: ErrorStateProps) {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex h-[50vh] w-full flex-col items-center justify-center"
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 10 }}
      >
        <AlertTriangle className="h-16 w-16 text-destructive" />
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-6 text-2xl font-bold"
      >
        Oops!
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-2 max-w-md text-center text-muted-foreground"
      >
        {message}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-6"
      >
        <Button
          onClick={() => router.back()}
          variant="outline"
          className="mr-2"
        >
          Go Back
        </Button>
        <Button onClick={() => router.push('/')}>Home</Button>
      </motion.div>
    </motion.div>
  );
}

'use client';

import { Loader2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function LoadingState() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex h-[60vh] w-full flex-col items-center justify-center"
    >
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <Loader2 className="h-12 w-12 text-primary" />
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-4 text-muted-foreground"
      >
        Loading component...
      </motion.p>
    </motion.div>
  );
}

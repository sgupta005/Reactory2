'use client';

import SearchComponents from './SearchComponents';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <>
      <motion.div
        className="text-center max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold tracking-tight md:w-4/5 mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Discover the web's top react components
        </motion.h1>
        <motion.p
          className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Explore work from the most talented and accomplished developers ready
          to take on <br />
          your next project
        </motion.p>
      </motion.div>
      <SearchComponents />
    </>
  );
}

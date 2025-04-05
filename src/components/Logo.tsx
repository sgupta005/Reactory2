import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <motion.div
      className={cn(
        'size-16 rounded-xl bg-gradient-to-br from-primary to-primary/5 mx-auto mb-4 flex items-center justify-center cursor-pointer',
        className
      )}
      whileHover={{ scale: 1.05 }}
    >
      <span className="text-2xl font-bold text-white">R</span>
    </motion.div>
  );
}

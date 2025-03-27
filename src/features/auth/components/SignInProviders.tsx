'use client';

import { Button } from '@/components/ui/button';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useSignInWithProvider } from '../hooks/useSignInWithProvider';

export default function SignInProviders() {
  const { isLoading, signInWithProvider } = useSignInWithProvider();

  const buttonVariants = {
    hover: {
      scale: 1.03,
      boxShadow:
        '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      transition: {
        duration: 0.2,
        ease: 'easeOut',
      },
    },
    tap: {
      scale: 0.97,
      transition: {
        duration: 0.1,
      },
    },
  };

  return (
    <>
      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <motion.span
            className="bg-background px-4 text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            Sign in with
          </motion.span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <motion.div
            className="overflow-hidden rounded-md"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Button
              variant="outline"
              type="button"
              onClick={() => signInWithProvider('google')}
              disabled={isLoading === 'google'}
              className="w-full border-2 relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-red-600/10 opacity-0 group-hover:opacity-100"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              {isLoading === 'google' ? (
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-muted border-t-current" />
              ) : (
                <>
                  <FaGoogle className="mr-2 h-4 w-4 text-red-500" />
                  <span>Google</span>
                </>
              )}
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          <motion.div
            className="overflow-hidden rounded-md"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Button
              variant="outline"
              type="button"
              onClick={() => signInWithProvider('github')}
              disabled={isLoading === 'github'}
              className="w-full border-2 relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-gray-500/10 to-gray-900/10 opacity-0 group-hover:opacity-100"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              {isLoading === 'github' ? (
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-muted border-t-current" />
              ) : (
                <>
                  <FaGithub className="mr-2 h-4 w-4" />
                  <span>Github</span>
                </>
              )}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

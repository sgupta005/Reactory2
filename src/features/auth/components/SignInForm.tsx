'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import SignInProviders from './SignInProviders';
import { Shield } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SignInForm() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <Card className="w-[400px] overflow-hidden relative bg-gradient-to-br from-background to-background/70">
        {/* Decorative line */}
        <motion.div
          className="absolute top-0 left-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary"
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 1, delay: 0.2 }}
        />

        <CardHeader className="relative">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <motion.div
              className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/80 to-secondary/80 mx-auto mb-4 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-4xl font-bold text-white">R</span>
            </motion.div>
            <CardTitle className="text-3xl text-center font-bold">
              <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Welcome to Reactory
              </span>
            </CardTitle>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <CardDescription className="text-center text-base mt-2">
              Sign in to submit your components
            </CardDescription>
          </motion.div>
        </CardHeader>

        <CardContent className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="py-4"
          >
            <SignInProviders />
          </motion.div>
        </CardContent>

        <CardFooter className="flex flex-col justify-center relative pb-6 text-center gap-3">
          <motion.div
            className="text-xs text-muted-foreground max-w-[300px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            By signing in, you agree to our Terms of Service and Privacy Policy.
            We never share your data with third parties.
          </motion.div>

          <motion.div
            className="text-xs rounded-lg bg-secondary/20 px-3 py-2 inline-flex items-center gap-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <Shield className="w-4 h-4" />
            Your information is protected by secure authentication
          </motion.div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

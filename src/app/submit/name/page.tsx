'use client';

import { SubmitComponentNameForm } from '@/features/submit-component/components/SubmitComponentNameForm';
import { motion } from 'framer-motion';

export default function SubmitComponentName() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* <Card className="container max-w-xl px-8 py-8 bg-gradient-to-br from-background to-background/70 relative"> */}
      <motion.div
        className="mb-8 text-center space-y-4 pt-[3rem]"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium">
              1
            </span>
            <span className="font-medium">Details</span>
          </div>
          <div className="h-px w-12 bg-border" />
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full border text-muted-foreground text-sm font-medium">
              2
            </span>
            <span className="font-medium">Code</span>
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-bold ">Submit Your Component</h1>
          <p className="mt-3 text-muted-foreground">
            Let's start with the basics. Give your component a name and
            description.
          </p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <SubmitComponentNameForm />
      </motion.div>
      {/* </Card> */}
    </motion.div>
  );
}

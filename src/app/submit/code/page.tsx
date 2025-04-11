'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { SandpackProvider } from '@codesandbox/sandpack-react';
import { Button } from '@/components/ui/button';
import SandpackWrapper from '@/features/submit-component/components/SandpackWrapper';

export default function SubmitComponentCode() {
  const router = useRouter();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-7xl mx-auto px-4 flex flex-col pt-6"
    >
      <motion.div
        className="mb-4 text-center space-y-3"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full border text-muted-foreground text-sm font-medium">
              1
            </span>
            <span className="font-medium">Details</span>
          </div>
          <div className="h-px w-12 bg-border" />
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium">
              2
            </span>
            <span className="font-medium">Code</span>
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent">
            Add Your Component Code
          </h1>
          <p className="mt-2 text-muted-foreground">
            Write your component code and see it in real time. You can create
            multiple files.
          </p>
        </div>
      </motion.div>

      <SandpackProvider
        template="react"
        theme="dark"
        options={{
          externalResources: ['https://cdn.tailwindcss.com'],
          visibleFiles: ['/App.js', '/styles.css'],
          activeFile: '/App.js',
        }}
        customSetup={{
          dependencies: {
            react: 'latest',
            'framer-motion': 'latest',
            'react-icons': 'latest',
            'lucide-react': 'latest',
            '@radix-ui/react-icons': 'latest',
            clsx: 'latest',
            'tailwind-merge': 'latest',
          },
          entry: '/index.js',
        }}
      >
        <SandpackWrapper />
      </SandpackProvider>
      <div className="flex items-center justify-center gap-3 mr-0 ml-auto mt-4 pb-4">
        <Button variant="outline" size="lg" onClick={() => router.back()}>
          Back
        </Button>
        <Button size="lg">Submit</Button>
      </div>
    </motion.div>
  );
}

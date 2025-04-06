'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import {
  SandpackProvider,
  SandpackCodeEditor,
  SandpackPreview,
} from '@codesandbox/sandpack-react';
import { useState } from 'react';
import { Code, Eye } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AddFiles from '@/features/submit-component/components/AddFiles';
import { Button } from '@/components/ui/button';
function SandpackWrapper() {
  const [activeTab, setActiveTab] = useState('editor');

  return (
    <div className="border rounded-lg overflow-hidden flex flex-col bg-background/80">
      <div className="p-2 border-b">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger
                value="editor"
                className="flex items-center gap-2 cursor-pointer"
              >
                <Code className="w-4 h-4" /> Editor
              </TabsTrigger>
              <TabsTrigger
                value="preview"
                className="flex items-center gap-2 cursor-pointer"
              >
                <Eye className="w-4 h-4" /> Preview
              </TabsTrigger>
            </TabsList>
            <AddFiles />
          </div>

          <div className="relative mt-2" style={{ height: '530px' }}>
            <div
              className="absolute inset-0 transition-opacity duration-300"
              style={{
                opacity: activeTab === 'editor' ? 1 : 0,
                pointerEvents: activeTab === 'editor' ? 'auto' : 'none',
              }}
            >
              <SandpackCodeEditor
                showLineNumbers={true}
                showInlineErrors={true}
                wrapContent={true}
                style={{ height: '530px' }}
              />
            </div>

            <div
              className="absolute inset-0 transition-opacity duration-300"
              style={{
                opacity: activeTab === 'preview' ? 1 : 0,
                pointerEvents: activeTab === 'preview' ? 'auto' : 'none',
              }}
            >
              <SandpackPreview
                showNavigator={true}
                style={{ height: '530px' }}
              />
            </div>
          </div>
        </Tabs>
      </div>
    </div>
  );
}

export default function SubmitComponentCode() {
  const router = useRouter();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-7xl mx-auto px-4 flex flex-col pt-[3rem] h-screen"
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
      <div className="flex items-center justify-center gap-3 mr-0 ml-auto mt-4">
        <Button variant="outline" size="lg" onClick={() => router.back()}>
          Back
        </Button>
        <Button size="lg">Submit</Button>
      </div>
    </motion.div>
  );
}

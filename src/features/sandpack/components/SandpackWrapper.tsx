'use client';

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Code, Eye } from 'lucide-react';
import { useRef, useState } from 'react';
import {
  SandpackCodeEditor,
  SandpackPreview,
  SandpackPreviewRef,
} from '@codesandbox/sandpack-react';

import AddFiles from './AddFiles';
import CopyButton from './CopyButton';
import { motion } from 'motion/react';

type ModeEnum = 'SUBMIT' | 'PREVIEW';

export default function SandpackWrapper({ mode }: { mode: ModeEnum }) {
  const [activeTab, setActiveTab] = useState('editor');
  const previewRef = useRef<SandpackPreviewRef>(null);

  console.log(previewRef.current?.getClient());

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="border rounded-lg overflow-hidden flex flex-col bg-background/80">
        <div className="p-2 border-b">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
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
              {activeTab === 'editor' && (
                <div className="flex items-center gap-2">
                  {mode === 'PREVIEW' && <CopyButton />}
                  {mode === 'SUBMIT' && <AddFiles />}
                </div>
              )}
            </div>

            <div className="relative mt-2" style={{ height: '500px' }}>
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
                  style={{ height: '500px' }}
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
                  ref={previewRef}
                  showNavigator={true}
                  style={{ height: '500px' }}
                />
              </div>
            </div>
          </Tabs>
        </div>
      </div>
    </motion.div>
  );
}

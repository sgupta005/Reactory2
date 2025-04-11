import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Code, Eye } from 'lucide-react';
import { useState } from 'react';
import {
  SandpackCodeEditor,
  SandpackPreview,
} from '@codesandbox/sandpack-react';
import AddFiles from './AddFiles';

export default function SandpackWrapper() {
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
                showNavigator={true}
                style={{ height: '500px' }}
              />
            </div>
          </div>
        </Tabs>
      </div>
    </div>
  );
}

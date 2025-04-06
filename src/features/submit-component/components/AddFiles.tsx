import { useSandpack } from '@codesandbox/sandpack-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

export default function AddFiles() {
  const { sandpack } = useSandpack();
  const [filename, setFilename] = useState('');

  function handleAddFile() {
    if (!filename) return;

    // Add file extension if not provided
    let finalName = filename;
    if (!finalName.includes('.')) {
      finalName = finalName.endsWith('.js') ? finalName : `${finalName}.js`;
    }

    sandpack.addFile(`/${finalName}`, '// Add your code here');
    sandpack.visibleFiles.push(`/${finalName}`);
    setFilename('');
  }

  return (
    <div className="flex items-center gap-2">
      <input
        type="text"
        value={filename}
        onChange={(e) => setFilename(e.target.value)}
        placeholder="New file name"
        className="h-9 px-3 py-1 bg-background/50 backdrop-blur-sm border rounded-md text-sm"
        onKeyDown={(e) => e.key === 'Enter' && handleAddFile()}
      />
      <Button
        size="sm"
        variant="outline"
        onClick={handleAddFile}
        className="flex items-center gap-1"
      >
        <Plus className="w-4 h-4" /> Add
      </Button>
    </div>
  );
}

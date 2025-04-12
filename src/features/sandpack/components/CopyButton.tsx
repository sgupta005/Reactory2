'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useActiveCode } from '@codesandbox/sandpack-react';
import { Check, Copy } from 'lucide-react';
import { useRef, useState } from 'react';
import { toast } from 'sonner';

function CopyButton() {
  const [copied, setCopied] = useState(false);
  const { code } = useActiveCode();

  const copyTimeout = useRef<NodeJS.Timeout | null>(null);
  async function handleCopyCode() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      toast.success('Code copied to clipboard');

      if (copyTimeout.current) {
        clearTimeout(copyTimeout.current);
      }

      copyTimeout.current = setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      toast.error('Failed to copy code');
      console.error('Failed to copy code:', err);
    }
  }
  return (
    <Button
      variant="outline"
      size="sm"
      className={cn(
        'transition-colors hover:bg-muted',
        copied &&
          'bg-green-500/10 text-green-600 hover:bg-green-500/20 hover:text-green-700'
      )}
      onClick={handleCopyCode}
    >
      {copied ? (
        <>
          <Check className="w-4 h-4 mr-1" /> Copied
        </>
      ) : (
        <>
          <Copy className="w-4 h-4 mr-1" /> Copy Code
        </>
      )}
    </Button>
  );
}

export default CopyButton;

'use client';

import { Button } from '@/components/ui/button';
import { useSubmitComponentStore } from '../store';
import { useSandpack } from '@codesandbox/sandpack-react';
import { toast } from 'sonner';
import { useState } from 'react';
import MiniSpinner from '@/components/MiniSpinner';
import { submitComponent } from '../actions';
import { useRouter } from 'next/navigation';

function SubmitButton() {
  const name = useSubmitComponentStore((state) => state.name);
  const language = useSubmitComponentStore((state) => state.language);
  const description = useSubmitComponentStore((state) => state.description);

  const [isLoading, setIsLoading] = useState(false);
  const { sandpack } = useSandpack();
  const router = useRouter();

  async function handleSubmit() {
    if (!name || !language || !description) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsLoading(true);
    try {
      const files = sandpack.files;
      const result = await submitComponent({
        name,
        description,
        language,
        files,
      });

      if ('success' in result && result.success) {
        router.push(`/component/${result.componentId}?resetState=true`);
        toast.success('Component submitted successfully', {
          position: 'top-center',
        });
      } else if ('error' in result && result.error) {
        throw new Error(result.message || 'Failed to submit component');
      }
    } catch (error) {
      console.error('Error submitting component:', error);
      toast.error(
        error instanceof Error
          ? error.message
          : 'An unexpected error occurred.',
        {
          position: 'top-center',
        }
      );
      setIsLoading(false);
    }
  }

  return (
    <Button size="lg" onClick={handleSubmit} disabled={isLoading}>
      {isLoading ? <MiniSpinner /> : 'Submit'}
    </Button>
  );
}

export default SubmitButton;

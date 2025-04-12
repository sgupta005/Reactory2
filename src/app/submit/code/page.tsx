'use client';

import { SandpackProvider } from '@codesandbox/sandpack-react';
import SandpackWrapper from '@/features/sandpack/components/SandpackWrapper';
import StepShower from '@/features/submit/components/StepShower';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useSubmitComponentStore } from '@/features/submit/store';
import { useEffect } from 'react';

export default function SubmitComponentCode() {
  const { theme } = useTheme();
  const router = useRouter();

  const name = useSubmitComponentStore((state) => state.name);
  const language = useSubmitComponentStore((state) => state.language);
  const description = useSubmitComponentStore((state) => state.description);

  useEffect(
    function () {
      if (!useSubmitComponentStore.persist.hasHydrated()) return;
      if (!name || !language) {
        router.push('/submit/details');
      }
    },
    [name, language, router, useSubmitComponentStore.persist.hasHydrated]
  );

  function handleSubmit() {}
  return (
    <div className="w-full max-w-7xl mx-auto px-4 flex flex-col pt-6">
      <StepShower
        currentStep={2}
        title="Add Your Component's Code"
        description="Write your component code and see it in real time. You can create
          multiple files."
      />
      <SandpackProvider
        template="react"
        theme={theme === 'dark' ? 'dark' : 'light'}
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
        <SandpackWrapper mode="SUBMIT" />
      </SandpackProvider>
      <div className="flex items-center justify-center gap-3 mr-0 ml-auto mt-4 pb-4">
        <Button variant="outline" size="lg" onClick={() => router.back()}>
          Back
        </Button>
        <Button size="lg" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </div>
  );
}

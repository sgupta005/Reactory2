'use client';

import { useEffect } from 'react';
import {
  useSearchParams,
  useRouter,
  usePathname,
  useParams,
} from 'next/navigation';
import { useSubmitComponentStore } from '@/features/submit/store';
import { useComponentData } from '@/features/component-page/hooks/useComponentData';
import { motion } from 'motion/react';
import { SandpackProvider } from '@codesandbox/sandpack-react';
import ErrorState from '@/features/component-page/components/ErrorState';
import LoadingState from '@/features/component-page/components/LoadingState';
import SandpackWrapper from '@/features/sandpack/components/SandpackWrapper';
import ComponentHeader from '@/features/component-page/components/ComponentHeader';

function ComponentPage() {
  const params = useParams<{ id: string }>();
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const { data, isLoading, error } = useComponentData(params.id);
  const { files } = data || {};

  // Handle reset state from query params
  useEffect(() => {
    const shouldReset = searchParams.get('resetState');

    if (shouldReset === 'true') {
      useSubmitComponentStore.getState().reset();
      router.replace(pathname, { scroll: false });
    }
  }, [searchParams, router, pathname]);

  // Loading state
  if (isLoading) {
    return <LoadingState />;
  }

  // Error state
  if (error || !data || !data.component) {
    return <ErrorState message={error || 'Component not found'} />;
  }

  return (
    <motion.div
      className="container mx-auto px-4 py-8 max-w-7xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <ComponentHeader
        name={data.component.name}
        description={data.component.description}
        createdAt={data.component.createdAt}
        author={data.component.author}
      />

      <SandpackProvider
        files={files}
        template="react"
        theme="dark"
        options={{
          externalResources: ['https://cdn.tailwindcss.com'],
        }}
        customSetup={{
          dependencies: {
            'framer-motion': 'latest',
            motion: 'latest',
            'react-icons': 'latest',
            'lucide-react': 'latest',
          },
        }}
      >
        <SandpackWrapper mode="PREVIEW" />
      </SandpackProvider>
    </motion.div>
  );
}

export default ComponentPage;

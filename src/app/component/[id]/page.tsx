'use client';

import { useEffect, useState } from 'react';
import {
  useSearchParams,
  useRouter,
  usePathname,
  useParams,
} from 'next/navigation';
import { useSubmitComponentStore } from '@/features/submit/store';
import {
  getComponentData,
  ComponentWithFiles,
} from '@/features/component-page/actions';
import SandpackWrapper from '@/features/sandpack/components/SandpackWrapper';
import { SandpackProvider } from '@codesandbox/sandpack-react';

function ComponentPage() {
  const params = useParams<{ id: string }>();
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [componentData, setComponentData] = useState<ComponentWithFiles | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(true);

  // Handle reset state from query params
  useEffect(() => {
    const shouldReset = searchParams.get('resetState');

    if (shouldReset === 'true') {
      useSubmitComponentStore.getState().reset();
      router.replace(pathname, { scroll: false });
    }
  }, [searchParams, router, pathname]);

  // Fetch component data when the component mounts or id changes
  useEffect(() => {
    async function loadComponentData() {
      setIsLoading(true);
      try {
        const data = await getComponentData(params.id);
        setComponentData(data);
      } catch (error) {
        console.error('Error loading component data:', error);
      } finally {
        setIsLoading(false);
      }
    }

    loadComponentData();
  }, [params.id]);

  if (isLoading) {
    return <div>Loading component data...</div>;
  }

  if (!componentData || !componentData.component) {
    return <div>Component not found or {componentData?.error}</div>;
  }

  // Destructure component data for easier access
  const { component, files } = componentData;

  return (
    <SandpackProvider
      files={files}
      template="react"
      theme="dark"
      options={{
        externalResources: ['https://cdn.tailwindcss.com'],
      }}
      customSetup={{
        entry: 'index.js',
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
  );
}

export default ComponentPage;

'use client';

import { useEffect } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { useSubmitComponentStore } from '@/features/submit/store'; // Adjust import path as needed

interface ComponentPageProps {
  params: { id: string };
}

function ComponentPage({ params }: ComponentPageProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const shouldReset = searchParams.get('resetState');

    if (shouldReset === 'true') {
      useSubmitComponentStore.getState().reset();
      router.replace(pathname, { scroll: false });
    }
  }, [searchParams, router, pathname]);

  return <div>Component</div>;
}

export default ComponentPage;

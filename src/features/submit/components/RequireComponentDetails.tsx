'use client';

import { useRouter } from 'next/navigation';
import { ReactNode, useEffect, useState } from 'react';
import { useSubmitComponentStore } from '../store';

export default function RequireComponentDetails({
  children,
}: {
  children: ReactNode;
}) {
  const router = useRouter();
  const { name, language } = useSubmitComponentStore();
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(
    function () {
      if (useSubmitComponentStore.persist?.hasHydrated()) setIsHydrated(true);
      if (isHydrated && (!name || !language)) {
        router.push('/submit/details');
      }
    },
    [isHydrated, name, language, router]
  );

  return <>{children}</>;
}

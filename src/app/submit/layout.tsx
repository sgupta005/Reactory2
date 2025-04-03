import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { ReactNode } from 'react';

async function SubmitLayout({ children }: { children: ReactNode }) {
  const session = await auth();
  if (!session) {
    return redirect('/sign-in');
  }
  return children;
}

export default SubmitLayout;

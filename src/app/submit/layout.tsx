import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { ReactNode } from 'react';
import Reactory from '@/components/Reactory';

async function SubmitLayout({ children }: { children: ReactNode }) {
  const session = await auth();
  if (!session) {
    return redirect('/sign-in');
  }
  return (
    <div className="flex items-center justify-center h-screen">
      <Reactory className="absolute top-10 left-20 hidden sm:block" />
      <div className="absolute w-full max-w-3xl h-60 bg-primary/5 rounded-full blur-3xl top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      {children}
    </div>
  );
}

export default SubmitLayout;

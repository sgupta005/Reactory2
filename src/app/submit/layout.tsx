import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { ReactNode } from 'react';
import { Navbar } from '@/components/Navbar';

async function SubmitLayout({ children }: { children: ReactNode }) {
  const session = await auth();
  if (!session) {
    return redirect('/sign-in');
  }
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex justify-center">{children}</div>
    </div>
  );
}

export default SubmitLayout;

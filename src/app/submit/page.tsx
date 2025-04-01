import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';

async function page() {
  const session = await auth();
  if (!session) {
    return redirect('/sign-in');
  }
  return <div>Submit</div>;
}

export default page;

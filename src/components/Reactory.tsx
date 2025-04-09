import { cn } from '@/lib/utils';
import Link from 'next/link';

function Reactory({ className }: { className?: string }) {
  return (
    <Link href="/">
      <span className={cn('text-xl font-bold', className)}>Reactory</span>
    </Link>
  );
}

export default Reactory;

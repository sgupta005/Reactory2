'use client';

import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { User } from 'lucide-react';
import { motion } from 'motion/react';
import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Reactory from '@/components/Reactory';
import Logout from './Logout';

export function Navbar() {
  const { data: session, status } = useSession();
  const pathname = usePathname();
  const hideNavbarRoutes = ['/sign-in'];

  if (hideNavbarRoutes.includes(pathname)) {
    return null;
  }

  return (
    <motion.header
      className="sticky top-0 z-50 w-full border-b border-border/40 backdrop-blur bg-background/70"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="py-4 px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Reactory />
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          {status === 'loading' && (
            <div className="h-10 w-24 bg-muted animate-pulse rounded-md" />
          )}
          {status === 'authenticated' && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-10 w-10 rounded-full"
                >
                  <Avatar className="size-10">
                    <AvatarImage
                      src={session.user?.image || ''}
                      alt={session.user?.name || ''}
                    />
                    <AvatarFallback>
                      {session.user?.name
                        ? session.user.name.substring(0, 2).toUpperCase()
                        : 'UN'}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-72 p-4 mt-1" align="end">
                <div className="flex items-center flex-col gap-2 mb-4">
                  <Avatar className="size-10">
                    <AvatarImage
                      src={session.user?.image || ''}
                      alt={session.user?.name || ''}
                    />
                    <AvatarFallback>
                      {session.user?.name
                        ? session.user.name.substring(0, 2).toUpperCase()
                        : 'UN'}
                    </AvatarFallback>
                  </Avatar>
                  {session.user?.name}
                </div>

                <DropdownMenuItem className="cursor-pointer focus:bg-muted p-0">
                  <Link
                    href={`/profile/${session.user?.id}`}
                    className="flex items-center gap-2 w-full px-1.5 py-2"
                  >
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />

                <DropdownMenuItem className="cursor-pointer focus:bg-muted p-0">
                  <Logout />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
          {status === 'unauthenticated' && (
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="rounded-4xl font-semibold" size="lg">
                <Link href="/sign-in">Sign In</Link>
              </Button>
            </motion.div>
          )}
        </div>
      </div>
    </motion.header>
  );
}

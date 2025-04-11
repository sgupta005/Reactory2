'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Reactory from '@/components/Reactory';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { useSession, signIn, signOut } from 'next-auth/react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { LogOut, User } from 'lucide-react';
import { useRouter } from 'next/navigation';

export function Navbar() {
  const { data: session, status } = useSession();
  const isLoading = status === 'loading';
  const router = useRouter();
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

          {isLoading ? (
            <div className="h-10 w-24 bg-muted animate-pulse rounded-md" />
          ) : session ? (
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

                <DropdownMenuItem
                  className="cursor-pointer focus:bg-muted"
                  onClick={() => router.push(`/profile/${session.user?.id}`)}
                >
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />

                <DropdownMenuItem
                  className="cursor-pointer focus:bg-muted"
                  onClick={() => signOut()}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                className="rounded-4xl font-semibold"
                size="lg"
                onClick={() => signIn()}
              >
                Sign In
              </Button>
            </motion.div>
          )}
        </div>
      </div>
    </motion.header>
  );
}

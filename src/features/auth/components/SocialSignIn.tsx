'use client';

import { Button } from '@/components/ui/button';
import { FaGoogle, FaGithub } from 'react-icons/fa';

import { useSignInWithProvider } from '../hooks/useSignInWithProvider';
export default function SocialSignIn() {
  const { isLoading, signInWithProvider } = useSignInWithProvider();
  return (
    <>
      <div className="relative my-4">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Button
          variant="outline"
          type="button"
          onClick={() => signInWithProvider('google')}
          disabled={isLoading === 'google'}
        >
          {isLoading === 'google' ? (
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-muted border-t-current" />
          ) : (
            <FaGoogle className="mr-2 h-4 w-4" />
          )}
          Google
        </Button>

        <Button
          variant="outline"
          type="button"
          onClick={() => signInWithProvider('github')}
          disabled={isLoading === 'github'}
        >
          {isLoading === 'github' ? (
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-muted border-t-current" />
          ) : (
            <FaGithub className="mr-2 h-4 w-4" />
          )}
          Github
        </Button>
      </div>
    </>
  );
}

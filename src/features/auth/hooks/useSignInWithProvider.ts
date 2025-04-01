import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { toast } from 'sonner';

export const useSignInWithProvider = () => {
  const [isLoading, setIsLoading] = useState('');

  const signInWithProvider = async (provider: 'google' | 'github') => {
    try {
      setIsLoading(provider);
      await signIn(provider, { redirectTo: '/' });
    } catch (error) {
      toast.error(`Failed to sign in with ${provider}`);
    } finally {
      setIsLoading('');
    }
  };

  return { isLoading, signInWithProvider };
};

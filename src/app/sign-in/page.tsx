import SignInForm from '@/features/auth/components/SignInForm';

export default function SignIn() {
  return (
    <div className="min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute w-full max-w-2xl h-60 bg-primary/20 rounded-full blur-3xl top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      <SignInForm />
    </div>
  );
}

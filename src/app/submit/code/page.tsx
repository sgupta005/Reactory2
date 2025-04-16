import { Button } from '@/components/ui/button';
import * as motion from 'motion/react-client';
import { SandpackProvider } from '@codesandbox/sandpack-react';
import Link from 'next/link';

import StepShower from '@/features/submit/components/StepShower';
import SandpackWrapper from '@/features/sandpack/components/SandpackWrapper';
import SubmitButton from '@/features/submit/components/SubmitButton';
import RequireComponentDetails from '@/features/submit/components/RequireComponentDetails';

export default function SubmitComponentCode() {
  return (
    <RequireComponentDetails>
      <div className="w-full max-w-7xl mx-auto px-4 flex flex-col pt-6">
        <StepShower
          currentStep={2}
          title="Add Your Component's Code"
          description="Write your component code and see it in real time. You can create
          multiple files."
        />
        <SandpackProvider
          template="react"
          theme="dark"
          options={{
            externalResources: ['https://cdn.tailwindcss.com'],
          }}
          customSetup={{
            dependencies: {
              'framer-motion': 'latest',
              motion: 'latest',
              'react-icons': 'latest',
              'lucide-react': 'latest',
            },
          }}
        >
          <SandpackWrapper mode="SUBMIT" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-end gap-3 mt-4 pb-4"
          >
            <Link href="/submit/details">
              <Button size="lg" variant="secondary">
                Back
              </Button>
            </Link>
            <SubmitButton />
          </motion.div>
        </SandpackProvider>
      </div>
    </RequireComponentDetails>
  );
}

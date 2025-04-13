import { cn } from '@/lib/utils';
import * as motion from 'motion/react-client';

function Step({
  step,
  title,
  currentStep,
}: {
  step: number;
  title: string;
  currentStep: number;
}) {
  return (
    <div className="flex items-center gap-2">
      <span
        className={cn(
          'flex h-6 w-6 items-center justify-center rounded-full border text-muted-foreground text-sm font-medium',
          step === currentStep && 'bg-primary text-primary-foreground'
        )}
      >
        {step}
      </span>
      <span className="font-medium">{title}</span>
    </div>
  );
}

export default function StepShower({
  currentStep,
  title,
  description,
}: {
  currentStep: number;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      className="mb-4 text-center space-y-3"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
        <Step step={1} title="Details" currentStep={currentStep} />
        <div className="h-px w-12 bg-border" />
        <Step step={2} title="Code" currentStep={currentStep} />
      </div>
      <div>
        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
        <p className="mt-2 text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  );
}

import SubmitComponentDetailsForm from '@/features/submit/components/SubmitComponentDetailsForm';
import StepShower from '@/features/submit/components/StepShower';

export default function SubmitComponentDetails() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 flex flex-col pt-6">
      <StepShower
        currentStep={1}
        title="Add Your Component's Details"
        description="Provide details about your component."
      />
      <SubmitComponentDetailsForm />
    </div>
  );
}

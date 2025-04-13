'use client';

import { Button } from '@/components/ui/button';
import { useSubmitComponentStore } from '../store';

function SubmitButton() {
  const name = useSubmitComponentStore((state) => state.name);
  const language = useSubmitComponentStore((state) => state.language);
  const description = useSubmitComponentStore((state) => state.description);

  function handleSubmit() {}
  return (
    <Button size="lg" onClick={handleSubmit}>
      Submit
    </Button>
  );
}

export default SubmitButton;

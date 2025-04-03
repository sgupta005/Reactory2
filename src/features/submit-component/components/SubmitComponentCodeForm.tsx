'use client';

import { z } from 'zod';
import { submitComponentSchema } from '../schema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  Form,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const submitComponentCodeSchema = submitComponentSchema.pick({
  code: true,
});

type SubmitComponentCodeSchema = z.infer<typeof submitComponentCodeSchema>;

export function SubmitComponentCodeForm() {
  const router = useRouter();
  const form = useForm<SubmitComponentCodeSchema>({
    resolver: zodResolver(submitComponentCodeSchema),
    defaultValues: {
      code: '',
    },
  });
  function onSubmit(data: SubmitComponentCodeSchema) {
    console.log(data);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="code"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Code</FormLabel>
              <FormControl>
                <Input {...field} placeholder="My Component" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Next</Button>
      </form>
    </Form>
  );
}

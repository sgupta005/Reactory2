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
const submitComponentNameSchema = submitComponentSchema.pick({
  name: true,
  description: true,
});

type SubmitComponentNameSchema = z.infer<typeof submitComponentNameSchema>;

export function SubmitComponentNameForm() {
  const router = useRouter();
  const form = useForm<SubmitComponentNameSchema>({
    resolver: zodResolver(submitComponentNameSchema),
    defaultValues: {
      name: '',
      description: '',
    },
  });
  function onSubmit(data: SubmitComponentNameSchema) {
    console.log(data);
    router.push('/submit/code');
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field} placeholder="My Component" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit">Next</Button>
      </form>
    </Form>
  );
}

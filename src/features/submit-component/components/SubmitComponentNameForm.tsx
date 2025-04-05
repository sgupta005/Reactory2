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
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 flex flex-col"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-semibold">Name</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="My Component"
                  className="h-11 px-4 bg-background/50 backdrop-blur-sm border-2 placeholder:text-muted-foreground/50 focus:border-primary/50 focus:bg-background "
                />
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
              <FormLabel className="text-base font-semibold">
                Description (Optional)
              </FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  placeholder="What does your component do? What problems does it solve?"
                  className="min-h-[120px] px-4 py-3 bg-background/50 backdrop-blur-sm border-2 placeholder:text-muted-foreground/50 focus:border-primary/50 focus:bg-background resize-none"
                />
              </FormControl>
              <FormMessage className="text-sm" />
            </FormItem>
          )}
        />
        <Button type="submit" className="mr-0 ml-auto">
          Next
        </Button>
      </form>
    </Form>
  );
}

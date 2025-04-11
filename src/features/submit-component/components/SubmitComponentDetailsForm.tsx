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
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X } from 'lucide-react';
import {
  Select,
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
} from '@/components/ui/select';

const submitComponentNameSchema = submitComponentSchema.pick({
  name: true,
  language: true,
  description: true,
});

type SubmitComponentNameSchema = z.infer<typeof submitComponentNameSchema>;

export default function SubmitComponentDetailsForm() {
  const router = useRouter();
  const form = useForm<SubmitComponentNameSchema>({
    resolver: zodResolver(submitComponentNameSchema),
    defaultValues: {
      name: '',
      description: '',
      language: 'javascript',
    },
    mode: 'onChange', // Enable real-time validation
  });

  const {
    watch,
    formState: { errors, isSubmitted },
  } = form;
  const nameValue = watch('name');
  const descriptionValue = watch('description');

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
            <FormItem className="relative">
              <FormLabel className="text-base font-semibold">Name</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    autoFocus
                    {...field}
                    placeholder="My Component"
                    className="h-11 px-4 bg-background/50 backdrop-blur-sm border-2 placeholder:text-muted-foreground/50 focus:bg-background pr-10 transition-colors duration-200"
                  />
                  <AnimatePresence>
                    {nameValue && nameValue.length >= 3 && !errors.name && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        className="absolute right-3 top-1/2 -translate-y-1/2"
                      >
                        <div className="bg-green-500/20 p-1 rounded-full">
                          <Check className="w-4 h-4 text-green-500" />
                        </div>
                      </motion.div>
                    )}
                    {isSubmitted && errors.name && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        className="absolute right-3 top-1/2 -translate-y-1/2"
                      >
                        <div className="bg-red-500/20 p-1 rounded-full">
                          <X className="w-4 h-4 text-red-400" />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="language"
          render={({ field }) => (
            <FormItem className="relative">
              <FormLabel className="text-base font-semibold">Name</FormLabel>
              <FormControl>
                <Select>
                  <SelectTrigger className="w-full cursor-pointer">
                    <SelectValue placeholder="Language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="javascript">JavaScript</SelectItem>
                    <SelectItem value="typescript">TypeScript</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem className="relative">
              <FormLabel className="text-base font-semibold">
                Description (Optional)
              </FormLabel>
              <FormControl>
                <div className="relative">
                  <Textarea
                    {...field}
                    placeholder="What does your component do? What problems does it solve?"
                    className="min-h-[120px] px-4 py-3 bg-background/50 backdrop-blur-sm border-2 placeholder:text-muted-foreground/50 focus:border-primary/50 focus:bg-background resize-none pr-10"
                  />
                  <AnimatePresence>
                    {descriptionValue && descriptionValue.length >= 10 && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        className="absolute right-3 top-4"
                      >
                        <div className="bg-green-500/20 p-1 rounded-full">
                          <Check className="w-4 h-4 text-green-500" />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
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

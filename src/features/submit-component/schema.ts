import { z } from 'zod';

export const submitComponentSchema = z.object({
  name: z.string().min(3, { message: 'Name is required' }),
  language: z.enum(['javascript', 'typescript'], {
    errorMap: () => ({
      message: 'Language must be either JavaScript or TypeScript',
    }),
  }),
  description: z.string(),
  code: z.string().min(1, { message: 'Code is required' }),
});

export type SubmitComponentSchema = z.infer<typeof submitComponentSchema>;

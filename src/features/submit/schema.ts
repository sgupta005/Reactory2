import { z } from 'zod';

export const submitComponentSchema = z.object({
  name: z.string().min(3, { message: 'Name is required' }),
  language: z.enum(['javascript', 'typescript'], {
    errorMap: () => ({
      message: 'Language must be either JavaScript or TypeScript',
    }),
  }),
  description: z.string(),
  files: z.record(
    z.object({
      code: z.string(),
      hidden: z.boolean().optional(),
      active: z.boolean().optional(),
      readOnly: z.boolean().optional(),
    })
  ),
});

export type SubmitComponentSchema = z.infer<typeof submitComponentSchema>;

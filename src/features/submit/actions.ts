'use server';

import { z } from 'zod';
// import { submitComponentSchema } from './schema';
// import { redirect } from 'next/navigation';
// import { createComponent } from './db';

// export async function submitComponent(
//   unsafeData: z.infer<typeof submitComponentSchema>
// ) {
//   const { data, success } = submitComponentSchema.safeParse(unsafeData);
//   if (!success) {
//     return {
//       error: true,
//       message: 'There was an error while submitting your component.',
//     };
//   }
//   const component = await createComponent(data);
//   redirect(`/components/${component.id}`);
// }

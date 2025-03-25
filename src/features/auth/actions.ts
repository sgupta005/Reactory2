import {
  signInSchema,
  SignInValues,
  signUpSchema,
  SignUpValues,
} from './schemas';

export async function signIn(unsafeData: SignInValues) {
  const { success, data, error } = signInSchema.safeParse(unsafeData);

  if (!success) {
    return { error: error.flatten().fieldErrors, data: null };
  }
  const { email, password } = data;
  console.log(email, password);
}

export async function signUp(unsafeData: SignUpValues) {
  const { success, data, error } = signUpSchema.safeParse(unsafeData);

  if (!success) {
    return { error: error.flatten().fieldErrors, data: null };
  }
  const { name, email, password } = data;
}

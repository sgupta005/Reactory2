import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { SubmitComponentSchema } from './schema';

// Define the initial state explicitly for resetting
const initialState: Partial<SubmitComponentSchema> = {
  name: undefined,
  description: undefined,
  language: undefined,
  files: undefined,
};

type submitComponentState = Partial<SubmitComponentSchema> & {
  setData: (data: Partial<SubmitComponentSchema>) => void;
  reset: () => void;
};

export const useSubmitComponentStore = create<submitComponentState>()(
  persist(
    (set) => ({
      ...initialState,
      setData: (data) => set((state) => ({ ...state, ...data })),
      reset: () => set(initialState),
    }),
    {
      name: 'submit-component-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

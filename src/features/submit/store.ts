import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { SubmitComponentSchema } from './schema';

type submitComponentState = Partial<SubmitComponentSchema> & {
  setData: (data: Partial<SubmitComponentSchema>) => void;
};

export const useSubmitComponentStore = create<submitComponentState>()(
  persist(
    (set) => ({
      setData: (data) => set(data),
    }),
    {
      name: 'submit-component-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

import { create } from 'zustand';
import { SubmitComponentSchema } from './schema';

type submitComponentState = Partial<SubmitComponentSchema> & {
  setData: (data: Partial<SubmitComponentSchema>) => void;
};

export const useSubmitComponentStore = create<submitComponentState>((set) => ({
  setData: (data) => set(data),
}));

import create from 'zustand';

interface SharedState {
  count: number;
  increment: () => void;
}

export const useSharedState = create<SharedState>((set) => ({
  count: 0,
  increment: () => set((s) => ({ count: s.count + 1 }))
}));

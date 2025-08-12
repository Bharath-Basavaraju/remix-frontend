import create from 'zustand';
export const useSharedState = create((set) => ({
    count: 0,
    increment: () => set((s) => ({ count: s.count + 1 }))
}));

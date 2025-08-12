// store.ts
import create from "zustand";
var useSharedState = create((set) => ({
  count: 0,
  increment: () => set((s) => ({ count: s.count + 1 }))
}));
export {
  useSharedState
};

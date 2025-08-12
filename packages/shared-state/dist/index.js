// store.ts
import { atom } from "nanostores";
import { useStore } from "@nanostores/react";
var countStore = atom(0);
var increment = () => {
  countStore.set(countStore.get() + 1);
};
function useSharedState() {
  const count = useStore(countStore);
  return { count, increment };
}
export {
  useSharedState
};

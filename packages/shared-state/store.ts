import { atom } from 'nanostores';
import { useStore } from '@nanostores/react';

export const countStore = atom(0);

export const increment = () => {
  countStore.set(countStore.get() + 1);
};

export function useSharedState() {
  const count = useStore(countStore);
  return { count, increment };
}

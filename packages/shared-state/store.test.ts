import { describe, it, expect } from 'vitest';
import { countStore, increment } from './store';

describe('shared state store', () => {
  it('increments the count', () => {
    expect(countStore.get()).toBe(0);
    increment();
    expect(countStore.get()).toBe(1);
  });
});

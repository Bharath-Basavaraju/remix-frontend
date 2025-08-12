import { describe, it, expect } from 'vitest';
import { useSharedState } from './store';

describe('shared state store', () => {
  it('increments the count', () => {
    expect(useSharedState.getState().count).toBe(0);
    useSharedState.getState().increment();
    expect(useSharedState.getState().count).toBe(1);
  });
});

import { describe, it, expect } from 'vitest';
import { interpret } from 'xstate';
import { navigationMachine } from '../src/navigationMachine';

describe('navigation state machine', () => {
  it('navigates between shell and produce scale', () => {
    const service = interpret(navigationMachine).start();
    expect(service.state.value).toBe('shell');
    service.send('PRODUCE');
    expect(service.state.value).toBe('produceScale');
    service.send('SHELL');
    expect(service.state.value).toBe('shell');
  });
});

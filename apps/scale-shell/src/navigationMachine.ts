import { createMachine } from 'xstate';

export const navigationMachine = createMachine(
  {
    id: 'navigation',
    initial: 'shell',
    states: {
      shell: {
        on: {
          PRODUCE: 'produceScale',
          COLLEAGUE: 'colleagueMenu',
          NOTIFICATION: 'notification',
        },
      },
      produceScale: { on: { SHELL: 'shell' } },
      colleagueMenu: { on: { SHELL: 'shell' } },
      notification: { on: { SHELL: 'shell' } },
    },
  },
  { predictableActionArguments: true }
);

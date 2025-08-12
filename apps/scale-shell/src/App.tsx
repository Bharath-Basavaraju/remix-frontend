import React from 'react';
import { useMachine } from '@xstate/react';
import { navigationMachine } from './navigationMachine';
import { useSharedState } from 'shared-state';

const LoadRemote = (scope: any) => {
  const Component = React.lazy(() => scope);
  return (
    <React.Suspense fallback="Loading...">
      <Component />
    </React.Suspense>
  );
};

export default function App() {
  const [state, send] = useMachine(navigationMachine);
  const shared = useSharedState();

  const renderChild = () => {
    switch (state.value) {
      case 'produceScale':
        return LoadRemote(import('produceScale/App'));
      case 'colleagueMenu':
        return LoadRemote(import('colleagueMenu/App'));
      case 'notification':
        return LoadRemote(import('notification/App'));
      default:
        return <div>Welcome to ScaleShell</div>;
    }
  };

  return (
    <div>
      <nav>
        <button onClick={() => send('PRODUCE')}>ProduceScale</button>
        <button onClick={() => send('COLLEAGUE')}>ColleagueMenu</button>
        <button onClick={() => send('NOTIFICATION')}>Notification</button>
      </nav>
      {renderChild()}
      <div>Shared count: {shared.count}</div>
    </div>
  );
}

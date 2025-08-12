import React from 'react';
import { useSharedState } from 'shared-state';

export default function App() {
  const shared = useSharedState();
  return (
    <div>
      <h2>ColleagueMenu App</h2>
      <button onClick={() => shared.increment()}>Increment</button>
    </div>
  );
}

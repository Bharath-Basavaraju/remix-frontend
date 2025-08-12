import { useSharedState } from 'shared-state';

export default function Notification() {
  const shared = useSharedState();
  return (
    <div>
      <h2>Notification App</h2>
      <button onClick={() => shared.increment()}>Increment</button>
    </div>
  );
}

import { useSharedState } from 'shared-state';

export default function ProduceScale() {
  const shared = useSharedState();
  return (
    <div>
      <h2>ProduceScale App</h2>
      <button onClick={() => shared.increment()}>Increment</button>
    </div>
  );
}

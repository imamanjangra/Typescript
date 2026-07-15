import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <div>count = {count}</div>
      <button onClick={() => setCount((c) => c+1)}>click me!</button>
    </div>
  );
}

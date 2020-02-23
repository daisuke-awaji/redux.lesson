import React, { useState } from "react";
export default () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3 data-test="count">count: {count}</h3>
      <button data-test="count-up" onClick={() => setCount(count + 1)}>
        ⬆︎
      </button>
      <button data-test="count-down" onClick={() => setCount(count - 1)}>
        ⬇︎
      </button>
    </div>
  );
};

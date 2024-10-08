import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button
        className="btn"
        onClick={() => {
          setCount((prev) => prev - 1);
        }}
      >
        -
      </button>
      <span>{count}</span>
      <button
        className="btn"
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        +
      </button>
    </div>
  );
}

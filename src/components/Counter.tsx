import React, { useState } from 'react';
import s from "./Counter.module.scss";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = (value: number) => {
    setCount(++value);
  };

  const decrement = (value: number) => {
    setCount(--value);
  };

  return (
    <>
      <h1>Result: <span className={s.count}>{count}</span></h1>
      <button onClick={() => increment(count)}>Increment</button>
      <button onClick={() => decrement(count)}>Decrement</button>
    </>
  );
};

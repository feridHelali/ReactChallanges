import { useState, useEffect } from 'react';

export default function Counter() {
  const [counter, setCounter] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(counter + 1)
    }, 1000);
    return () => {
      clearInterval(interval);
      console.log(interval);
    }
  });

  return (
    <div>
      <h1>Counter: <span>{counter}</span></h1>
      <button onClick={(e) => clearInterval()}>Click</button>
    </div>
  );

}
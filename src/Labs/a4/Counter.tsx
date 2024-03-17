import React, { useState } from 'react';

export default function Counter() {
  const [counter, setCounter] = useState(7);

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button
        onClick={() => {
          setCounter(counter + 1);
          console.log(counter);
        }}
        className='btn btn-success'>
        Up
      </button>
      <button
        onClick={() => {
          setCounter(counter - 1);
          console.log(counter);
        }}
        className='btn btn-danger'>
        Down
      </button>
    </div>
  );
}

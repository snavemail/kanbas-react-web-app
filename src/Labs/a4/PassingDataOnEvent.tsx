import React from 'react';

const add = (a: number, b: number) => {
  alert(`${a} + ${b} = ${a + b}`);
};

export default function PassingDataOnEvent() {
  return (
    <div>
      <h2>PassingDataOnEvent</h2>
      <button onClick={() => add(2, 3)} className='btn btn-primary'>
        Pass 2 and 3 to add()
      </button>
    </div>
  );
}

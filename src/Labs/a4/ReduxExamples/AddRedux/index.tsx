import { useSelector, useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { LabState } from '../../../store';
import { add } from './addReducer';

export default function AddRedux() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  const { sum } = useSelector((state: LabState) => state.addReducer);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Add Redux</h1>
      <h2>
        {a} + {b} = {sum}
      </h2>
      <input
        type='number'
        value={a}
        onChange={e => setA(parseInt(e.target.value))}
        className='form-control'
      />
      <input
        type='number'
        value={b}
        onChange={e => setB(parseInt(e.target.value))}
        className='form-control'
      />
      <button onClick={() => dispatch(add({ a, b }))} className='btn btn-primary'>
        Add Redux
      </button>
    </div>
  );
}

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, updateTodo, setTodo } from './todosReducer';
import { LabState } from '../../../store';

export default function TodoForm() {
  const dispatch = useDispatch();
  const { todo } = useSelector((state: LabState) => state.todosReducer);
  return (
    <li className='list-group-item'>
      <button onClick={() => dispatch(addTodo(todo))}> Add </button>
      <button onClick={() => dispatch(updateTodo(todo))}> Update </button>
      <input
        value={todo.title}
        onChange={e => dispatch(setTodo({ ...todo, title: e.target.value }))}
      />
    </li>
  );
}

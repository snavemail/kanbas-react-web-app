import React from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';
import { LabState } from '../../../store';

export default function TodoList() {
  const { todos } = useSelector((state: LabState) => state.todosReducer);

  return (
    <div>
      <h2>Todo List</h2>
      <ul className='list-group'>
        <TodoForm />
        {todos.map(todo => (
          <TodoItem todo={todo} />
        ))}
      </ul>
    </div>
  );
}

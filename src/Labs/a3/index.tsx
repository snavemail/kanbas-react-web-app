import React from 'react';
import JavaScript from './JavaScript';
import Routing from './routing';
import Classes from './css/Classes';
import Styles from './Styles';
import ConditionalOutput from './ConditionalOutput';
import Highlight from './Highlight';
import Add from './Add';
import TodoList from './todo/TodoList';
import { useSelector } from 'react-redux';
import { LabState } from '../store';

function Assignment3() {
  const { todos } = useSelector((state: LabState) => state.todosReducer);

  return (
    <div className='container'>
      <h2>Assignment 3</h2>
      <ul className='list-group'>
        {todos.map(todo => (
          <li className='list-group-item' key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>

      <ConditionalOutput />
      <Styles />
      <Classes />
      <Routing />
      <JavaScript />
      <Highlight>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus
        cum, saepe totam vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus
        sequi maiores, provident voluptates.
      </Highlight>
      <Add a={5} b={10} />
      <TodoList />
    </div>
  );
}

export default Assignment3;

import React from 'react';
import ReduxExamples from './ReduxExamples';
import ClickEvent from './ClickEvent';
import PassingDataOnEvent from './PassingDataOnEvent';
import PassingFunctions from './PassingFunctions';
import EventObject from './EventObject';
import Counter from './Counter';
import BooleanStateVariables from './BooleanStateVariables';
import StringStateVariables from './StringStateVariables';
import DateStateVariable from './DateStateVariable';
import ObjectStateVariables from './ObjectStateVariables';
import ArrayStateVariable from './ArrayStateVariable';
import ParentStateComponent from './ParentStateComponent';
import TodoList from './ReduxExamples/todos/TodoList';

function sayHello() {
  alert('Hello');
}

export default function Assignment4() {
  return (
    <div>
      <h1>Assignment 4</h1>
      <ReduxExamples />
      <ClickEvent />
      <PassingDataOnEvent />
      <PassingFunctions theFunction={sayHello} />
      <EventObject />
      <Counter />
      <BooleanStateVariables />
      <StringStateVariables />
      <DateStateVariable />
      <ObjectStateVariables />
      <ArrayStateVariable />
      <ParentStateComponent />
      <TodoList />
    </div>
  );
}

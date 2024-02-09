import React from "react";
import JavaScript from "./JavaScript";
import Routing from "./routing";
import Classes from "./css/Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import Highlight from "./Highlight";
import Add from "./Add";
import TodoList from "./todo/TodoList";

function Assignment3() {
  return (
    <div className="container">
      <h1>Assignment 3</h1>
      <ConditionalOutput />
      <Styles />
      <Classes />
      <Routing />
      <JavaScript />
      <Highlight>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione
        eaque illo minus cum, saepe totam vel nihil repellat nemo explicabo
        excepturi consectetur. Modi omnis minus sequi maiores, provident
        voluptates.
      </Highlight>
      <Add a={5} b={10} />
      <TodoList />
    </div>
  );
}

export default Assignment3;

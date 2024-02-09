import React from "react";
import JsonStringify from "./JsonStringify";
import House from "./House";
import Spreading from "./Spreading";
import Destructing from "./Destructing";

function WorkingWithJson() {
  return (
    <div>
      <h2>Working With JSON</h2>
      <JsonStringify />
      <House />
      <Spreading />
      <Destructing />
    </div>
  );
}

export default WorkingWithJson;

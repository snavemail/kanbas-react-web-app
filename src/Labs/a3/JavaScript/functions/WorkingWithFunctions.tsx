import React from "react";
import ES5Functions from "./ES5Functions";
import ArrowFunctions from "./ArrowFunctions";
import FunctionParenthesisAndParameters from "./FunctionParenthesisAndParameters";
import ImpliedReturns from "./ImpliedReturns";
import FunctionDestructing from "./FunctionDestructing";

function WorkingWithFunctions() {
  return (
    <div>
      <h2>Working With Functions</h2>
      <ES5Functions />
      <ArrowFunctions />
      <ImpliedReturns />
      <FunctionParenthesisAndParameters />
      <FunctionDestructing />
    </div>
  );
}

export default WorkingWithFunctions;

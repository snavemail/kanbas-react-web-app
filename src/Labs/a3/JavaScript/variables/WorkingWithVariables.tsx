import React from "react";
import BooleanVariables from "./BooleanVariables";
import VariableTypes from "./VariableTypes";
import VariablesAndConstants from "./VariablesAndConstants";

function WorkingWithVariables() {
  return (
    <div>
      <h2>Working With Variables</h2>
      <VariablesAndConstants />
      <VariableTypes />
      <BooleanVariables />
    </div>
  );
}

export default WorkingWithVariables;

import React from "react";
import WorkingWithVariables from "./variables/WorkingWithVariables";
import WorkingWithConditionals from "./conditionals/WorkingWithConditionals";
import WorkingWithFunctions from "./functions/ES5Functions";
import WorkingWithArrays from "./arrays/WorkingWithArrays";
import WorkingWithJson from "./json/WorkingWithJson";

function JavaScript() {
  console.log("JavaScript");
  return (
    <div>
      <h1>JavaScript</h1>
      <WorkingWithVariables />
      <WorkingWithConditionals />
      <WorkingWithFunctions />
      <WorkingWithArrays />
      <WorkingWithJson />
    </div>
  );
}

export default JavaScript;

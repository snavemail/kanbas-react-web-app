import React from "react";
import AddingAndRemovingDataToFromArrays from "./AddingAndRemovingDataToFromArrays";
import ArrayIndexAndlength from "./ArrayIndexAndlength";
import ForLoops from "./ForLoops";
import MapFunction from "./MapFunction";
import FindFunction from "./FindFunction";
import FindIndex from "./FindIndex";

function WorkingWithArrays() {
  var functionScoped = 2;
  let blockScoped = 5;
  const constant1 = functionScoped - blockScoped;
  let numberArray1 = [1, 2, 3, 4, 5];
  let stringArray1 = ["string1", "string2"];

  let variableArray1 = [
    functionScoped,
    blockScoped,
    constant1,
    numberArray1,
    stringArray1,
  ];

  return (
    <div>
      <h2>Working With Arrays</h2>
      number1Array = {numberArray1}
      <br />
      stringArray1 = {stringArray1}
      <br />
      variableArray1 = {variableArray1}
      <ArrayIndexAndlength />
      <AddingAndRemovingDataToFromArrays />
      <ForLoops />
      <MapFunction />
      <FindFunction />
      <FindIndex />
    </div>
  );
}

export default WorkingWithArrays;

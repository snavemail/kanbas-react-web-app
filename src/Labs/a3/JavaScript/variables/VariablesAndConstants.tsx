import React from "react";

function VariablesAndConstants() {
  var functionScoped = 2;
  let blockScoped = 5;
  const constant1 = functionScoped - blockScoped;
  return (
    <div>
      <h4>Variables And Constants</h4>
      function scoped = {functionScoped}
      <br />
      block scoped = {blockScoped}
      <br />
      constant = {constant1}
    </div>
  );
}

export default VariablesAndConstants;

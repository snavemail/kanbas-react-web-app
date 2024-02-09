import React from "react";

function IfElse() {
  let true1 = true,
    false1 = false;
  return (
    <div>
      <h4>If Else</h4>
      {true1 && <p>True1</p>}
      {!false1 ? <p>!False1</p> : <p>False1</p>}
    </div>
  );
}

export default IfElse;

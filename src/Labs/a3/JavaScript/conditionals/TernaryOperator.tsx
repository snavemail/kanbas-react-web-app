import React from "react";

function TernaryOperator() {
  let loggedIn = true;
  return (
    <div>
      <h4>Ternary Operator</h4>
      {loggedIn ? <p>Welcome User</p> : <p>Log In</p>}
    </div>
  );
}

export default TernaryOperator;

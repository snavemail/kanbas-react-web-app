import React from "react";
function ES5Functions() {
  function add(a: number, b: number) {
    return a + b;
  }

  const twoPlusFour = add(2, 4);
  console.log(twoPlusFour);

  return (
    <div>
      <h4>Legacy ES5 functions</h4>
      twoPlusFour = {twoPlusFour}
      <br />
      add(2, 4) = {add(2, 4)}
      <br />
    </div>
  );
}

export default ES5Functions;

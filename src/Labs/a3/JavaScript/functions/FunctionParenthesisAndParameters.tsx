import React from "react";

function FunctionParenthesisAndParameters() {
  const square = (a: number) => a * a;
  const plusOne = (a: number) => a + 1;
  const twoSquared = square(2);
  const threePlusOne = plusOne(3);
  return (
    <div>
      <h4>Function Parenthesis And Parameters</h4>
      twoSquared = {twoSquared}
      <br />
      threePlusOne = {threePlusOne}
      <br />
      square(2) = {square(2)}
      <br />
      plusOne(3) = {plusOne(3)}
    </div>
  );
}

export default FunctionParenthesisAndParameters;

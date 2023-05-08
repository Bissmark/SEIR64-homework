import { useState } from "react";
import React from "react";

function Square({ value, _onSquareClick }) {
  return (
    <button className="square" onClick={_onSquareClick}>
      {" "}
      {value}{" "}
    </button>
  );
}

export default Square;

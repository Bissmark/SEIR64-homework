import React, { useState } from "react";
import Square from "./Square";

export default function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    const nextSquare = squares.slice(); //creating a new copy of square so we dont mutate the original square
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    if (xIsNext) {
      nextSquare[i] = "X";
    } else {
      nextSquare[i] = "O";
    }

    onPlay(nextSquare);
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner:" + winner;
  } else {
    status = `Next player: ${xIsNext ? "X" : "O"}`;
  }

  return (
    <div className="board-table">
      <div className="status"> {status} </div>
      <div className="board-row">
        <Square value={squares[0]} _onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} _onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} _onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} _onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} _onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} _onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} _onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} _onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} _onSquareClick={() => handleClick(8)} />
      </div>
    </div>
  );
}

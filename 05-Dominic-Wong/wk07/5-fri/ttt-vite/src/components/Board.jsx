import Square from './Square.jsx'
import { useState } from 'react';

// Question - can this logic exist in it's own file?
function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
};

// main //////

const Board = () => {
    const [ xIsNext, setXIsNext ] = useState(true);
    const [ squares, setSquares ] = useState(Array(9).fill(null)); // .fill changes all elements in array to null

    const _handleClick = (i) => {
        if (squares[i] || calculateWinner(squares)) {
            return;
        };

        const nextSquares = squares.slice();

        if (xIsNext) {
            nextSquares[i] = "X";
        } else {
            nextSquares[i] = "O";
        };

        setSquares(nextSquares);
        setXIsNext(!xIsNext);
    };

    const winner = calculateWinner(squares);
    let status;
    if ( winner ) {
        status = "Winner: " + winner;
    } else {
        status = "Next player: " + ( xIsNext ? "X" : "O" );
    };
    
    return (
        <>
            <div className="status"> 
                {status} 
            </div>
            <div className="board-row">
                <Square value={squares[0]} onSquareClick={ () => _handleClick(0) }/>
                <Square value={squares[1]} onSquareClick={ () => _handleClick(1) }/>
                <Square value={squares[2]} onSquareClick={ () => _handleClick(2) }/>
            </div>
            <div className="board-row">
                <Square value={squares[3]} onSquareClick={ () => _handleClick(3) }/>
                <Square value={squares[4]} onSquareClick={ () => _handleClick(4) }/>
                <Square value={squares[5]} onSquareClick={ () => _handleClick(5) }/>
            </div>
            <div className="board-row">
                <Square value={squares[6]} onSquareClick={ () => _handleClick(6) }/>
                <Square value={squares[7]} onSquareClick={ () => _handleClick(7) }/>
                <Square value={squares[8]} onSquareClick={ () => _handleClick(8) }/>
            </div>
        </>
    );
};

export default Board;
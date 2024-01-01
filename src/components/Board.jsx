import { useState, useEffect } from "react";
import Tile from "./Tile";

function Board() {
  const [isX, setIsX] = useState(true);
  const [board, setBoard] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState(null)
  function calculateWinner(boardCopy) {
    const winCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [2, 4, 6],
    ];

    for (const combo of winCombos) {
      const [a, b, c] = combo;
      if (
        boardCopy[a] &&
        boardCopy[a] === boardCopy[b] &&
        boardCopy[a] === boardCopy[c]
      ) {
        return boardCopy[a]; // Return the winning player
      }
    }
    return null;
  }

  function handleCLick(i) {
    let boardCopy = board.slice();

    if (!board[i] && !calculateWinner(boardCopy))
      if (isX) {
        boardCopy[i] = "X";
      } else {
        boardCopy[i] = "O";
      }
      setBoard(boardCopy);
      setIsX(!isX);
      // calculateWinner(boardCopy)
      let winner = calculateWinner(boardCopy)

   // storing the function result in a variable

      if(winner) { 
          setWinner(winner)
      }
    }


  
  return (
    <div className="board">
      <Tile
        className="bottom-border right-border"
        doWhenClick={() => {
          handleCLick(0);
        }}
        value={board[0]}
      />
      <Tile
        className="bottom-border right-border"
        doWhenClick={() => {
          handleCLick(1);
        }}
        value={board[1]}
      />
      <Tile
        className="bottom-border"
        doWhenClick={() => {
          handleCLick(2);
        }}
        value={board[2]}
      />
      <Tile
        className="bottom-border right-border"
        doWhenClick={() => {
          handleCLick(3);
        }}
        value={board[3]}
      />
      <Tile
        className="bottom-border right-border"
        doWhenClick={() => {
          handleCLick(4);
        }}
        value={board[4]}
      />
      <Tile
        className="bottom-border"
        doWhenClick={() => {
          handleCLick(5);
        }}
        value={board[5]}
      />
      <Tile
        className="right-border"
        doWhenClick={() => {
          handleCLick(6);
        }}
        value={board[6]}
      />
      <Tile
        className="right-border"
        doWhenClick={() => {
          handleCLick(7);
        }}
        value={board[7]}
      />
      <Tile
        className=""
        doWhenClick={() => {
          handleCLick(8);
        }}
        value={board[8]}
      />
      {winner && <span>{winner} is the winner !</span>}
    </div>
  );
}

export default Board;

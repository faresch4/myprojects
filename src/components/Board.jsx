import { useState } from "react";
import Tile from "./Tile";


function Board() {
  const [isX, setIsX] = useState(true);
const [value, setValue] = useState("X");
const [board, setBoard] = useState(Array(9).fill(null));
function handleCLick(i) {
  let boardCopy = board.slice();
  if (isX) {
    boardCopy[i] = "X";
    setBoard(boardCopy);
  } else {
    boardCopy[i] = "O";
    setBoard(boardCopy);
  }
  setIsX(!isX);
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
    </div>
  );
}

export default Board;

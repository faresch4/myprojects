import Board from "./Board";
import State from "./State";
import Restart from './Restart'
import { useState } from "react";
import Choice from './Choice'
function Tictac() {
  const [isX, setIsX] = useState(true);
function setToX() {
  setIsX(true)g
}
function setToO() {
  setIsX(false)
}
  return (
    <>
      <span className="title">Tic Tac Toe</span>
      <Board stopGame={() => stopGame()} isX={isX} setIsX={setIsX} />
      <Choice isX={isX} setIsX={setIsX} setToX={() => setToX()}  setToO={() => setToO()}/>
    </>
  );
}

export default Tictac;

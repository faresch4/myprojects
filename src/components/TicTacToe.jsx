import Board from "./Board";
import State from "./State";
import Restart from './Restart'
import { useState } from "react";

function Tictac() {
  return (
    <>
      <span className="title">Tic Tac Toe</span>
      <Board />
    </>
  );
}

export default Tictac;

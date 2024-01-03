import Board from "./Board";
import State from "./State";
import Restart from "./Restart";
import { useState } from "react";
import Choice from "./Choice";
function Tictac() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState(null);
  const [isChoiceMade, setChoice] = useState(false);
  const [unMount, setUnMount] = useState(false)
  let boardCopy = board.slice();
  function stopGame() {
    setBoard(Array(9).fill(null));
    boardCopy = Array(9).fill(null);
    setIsX(true);
    setWinner(null);
    setUnMount(false)
  }

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
    if (!board[i] && !calculateWinner(boardCopy))
      if (isChoiceMade && unMount) {
        if (isX) {
          boardCopy[i] = "X";
        } else {
          boardCopy[i] = "O";
        }
        setBoard(boardCopy);
        setIsX(!isX);
      }else {
        alert('Please Choose your side first')
      }
      
    let winner = calculateWinner(boardCopy);

    if (winner) {
      setWinner(winner);
    }
  }
  const [isX, setIsX] = useState(null);
  function setToX() {
    setIsX(true);
    setChoice(true);
    setUnMount(true)

  }
  function setToO() {
    setIsX(false);
    setChoice(true);
    setUnMount(true)

  }
  return (
    <>
      <span className="title">Tic Tac Toe</span>
      <Board
        stopGame={() => stopGame()}
        isX={isX}
        setIsX={setIsX}
        winner={winner}
        handleCLick={(i) => handleCLick(i)}
        board={board}
        stopGame={() => stopGame()}
        setChoice={setChoice}
      />
      {!unMount && <Choice 
        isX={isX}
        setIsX={setIsX}
        setToX={() => setToX()}
        setToO={() => setToO()}
        setChoice={setChoice}
      />}
      <Restart stopGame={() => stopGame()} />
    </>
  );
}

export default Tictac;

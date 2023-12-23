import State from "./State";
import Tile from "./Tile";
import { useState } from "react";


function Board({playerStatus, PLAYER_O, PLAYER_X}) {
  const [tiles, setTiles] = useState(Array(9).fill(null));

  const [isHovering, setIsHovering] = useState(false);

  function handleCLick(i) {
    const newTiles = tiles.slice();
    if (!tiles[i] && calculateWinner() === null) {
      // we use () to call the function to know its returned state
      if (playerStatus === PLAYER_X) {
        newTiles[i] = "X";
        setPlayerStatus(PLAYER_O);
      } else {
        newTiles[i] = "O";
        setPlayerStatus(PLAYER_X);
      }
      setTiles(newTiles);
    }
    calculateWinner();
  }

  function Showwinner() {
    if (calculateWinner()) {
      return <span>Winner is {calculateWinner()}</span>;
    }
    if (!calculateWinner() && tiles.every((element) => element !== null))
      return <span>No winner</span>;
  }

  function calculateWinner() {
    let win = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [2, 4, 6],
    ];

    for (let combo of win) {
      if (
        tiles[combo[0]] == tiles[combo[1]] &&
        tiles[combo[1]] == tiles[combo[2]]
      ) {
        return tiles[combo[0]];
      }
    }
    return null;
  }
  return (
    <div className="board">
      <Tile
        value={tiles[0]}
        isHovering={isHovering}
        onClickTiles={() => {
          handleCLick(0);
        }}
        className="right-border bottom-border"
      />
      <Tile
        value={tiles[1]}
        isHovering={isHovering}
        onClickTiles={() => {
          handleCLick(1);
        }}
        className="right-border bottom-border"
      />
      <Tile
        value={tiles[2]}
        isHovering={isHovering}
        onClickTiles={() => {
          handleCLick(2);
        }}
        className="bottom-border"
      />

      <Tile
        value={tiles[3]}
        isHovering={isHovering}
        onClickTiles={() => {
          handleCLick(3);
        }}
        className="right-border bottom-border"
      />
      <Tile
        value={tiles[4]}
        isHovering={isHovering}
        onClickTiles={() => {
          handleCLick(4);
        }}
        className="right-border bottom-border"
      />
      <Tile
        value={tiles[5]}
        isHovering={isHovering}
        onClickTiles={() => {
          handleCLick(5);
        }}
        className="bottom-border"
      />

      <Tile
        value={tiles[6]}
        isHovering={isHovering}
        onClickTiles={() => {
          handleCLick(6);
        }}
        className="right-border "
      />
      <Tile
        value={tiles[7]}
        isHovering={isHovering}
        onClickTiles={() => {
          handleCLick(7);
        }}
        className="right-border "
      />
      <Tile
        value={tiles[8]}
        isHovering={isHovering}
        onClickTiles={() => {
          handleCLick(8);
        }}
      />

      <div className="strike">
        {Showwinner()}
        
      </div>
    </div>
  );
}

export default Board;

import Tile from "./Tile";

function Board({
  handleCLick,
  board,
  winner,
  handleMouseEnter,
  handleMouseLeave,
  unMount,
  isX,
  calculateWinner,
}) {
  return (
    <div className="board">
      <Tile
        className="bottom-border right-border"
        doWhenClick={() => {
          handleCLick(0);
        }}
        value={board[0]}
        handleMouseEnter={() => handleMouseEnter(0)}
        handleMouseLeave={() => handleMouseLeave()}
        handleCLick={() => handleCLick(0)}
        unMount={unMount}
        isX={isX}
        winner={winner}
/>
      <Tile
        className="bottom-border right-border"
        doWhenClick={() => {
          handleCLick(1);
        }}
        value={board[1]}
        handleMouseEnter={() => handleMouseEnter(1)}
        handleMouseLeave={() => handleMouseLeave()}
        handleCLick={() => handleCLick(1)}
        winner={winner}
        unMount={unMount}
        isX={isX}
      />
      <Tile
        className="bottom-border"
        doWhenClick={() => {
          handleCLick(2);
        }}
        value={board[2]}
        handleMouseEnter={() => handleMouseEnter(2)}
        handleMouseLeave={() => handleMouseLeave()}
        handleCLick={() => handleCLick(2)}
        winner={winner}
        unMount={unMount}
        isX={isX}
      />
      <Tile
        className="bottom-border right-border"
        doWhenClick={() => {
          handleCLick(3);
        }}
        value={board[3]}
        handleMouseEnter={() => handleMouseEnter(3)}
        handleMouseLeave={() => handleMouseLeave()}
        handleCLick={() => handleCLick(3)}
        winner={winner}
        unMount={unMount}
        isX={isX}
      />
      <Tile
        className="bottom-border right-border"
        doWhenClick={() => {
          handleCLick(4);
        }}
        value={board[4]}
        handleMouseEnter={() => handleMouseEnter(4)}
        handleMouseLeave={() => handleMouseLeave()}
        handleCLick={() => handleCLick(4)}
        winner={winner}
        unMount={unMount}
        isX={isX}
      />
      <Tile
        className="bottom-border"
        doWhenClick={() => {
          handleCLick(5);
        }}
        value={board[5]}
        handleMouseEnter={() => handleMouseEnter(5)}
        handleMouseLeave={() => handleMouseLeave()}
        handleCLick={() => handleCLick(5)}
        winner={winner}
        unMount={unMount}
        isX={isX}
      />
      <Tile
        className="right-border"
        doWhenClick={() => {
          handleCLick(6);
        }}
        value={board[6]}
        handleMouseEnter={() => handleMouseEnter(6)}
        handleMouseLeave={() => handleMouseLeave()}
        handleCLick={() => handleCLick(6)}
        winner={winner}
        unMount={unMount}
        isX={isX}
      />
      <Tile
        className="right-border"
        doWhenClick={() => {
          handleCLick(7);
        }}
        value={board[7]}
        handleMouseEnter={() => handleMouseEnter(7)}
        handleMouseLeave={() => handleMouseLeave()}
        handleCLick={() => handleCLick(7)}
        winner={winner}
        unMount={unMount}
        isX={isX}
      />
      <Tile
        className=""
        doWhenClick={() => {
          handleCLick(8);
        }}
        winner={winner}
        value={board[8]}
        handleMouseEnter={() => handleMouseEnter(8)}
        handleMouseLeave={() => handleMouseLeave()}
        handleCLick={() => handleCLick(8)}
        unMount={unMount}
        isX={isX}
      />
      {winner ? `${winner} is the winner` : ""}

      {board.every((b) => b != null) && !winner ? <span>No winner</span> : ""}
    </div>
  );
}

export default Board;

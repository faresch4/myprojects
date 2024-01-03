import Tile from "./Tile";

function Board({isX, setIsX,handleCLick,board,winner,stopGame}) {
  
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
      {winner   ? `${winner} is the winner` : ""}

      {board.every((b) => b != null) && !winner ? <span>No winner</span> : ""}
    </div>
  );
}

export default Board;

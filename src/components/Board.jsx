import Tile from "./Tile";

function Board({
  handleClick,
  board,
  winner,
  handleMouseEnter,
  handleMouseLeave,
  unMount,
  isX,
  calculateWinner,
}) {
  function getClassName(index) {
    let className = "";
    if (![2, 5, 8].includes(index)) className += "right-border ";
    if (index < 6) className += "bottom-border";
    return className.trim();
  }
  console.log(getClassName(1));
  const commonProps = {
    handleMouseEnter,
    handleMouseLeave,
    isX,
    unMount,
    winner,
  };

  return (
    <div className="board">
      {board.map((value, index) =>  (
         <Tile 
         key={index}
         className={getClassName(index)}
         doWhenClick={() => handleClick(index)}
         value={value}
         {...commonProps}
         />
      ))}
         {winner ? `${winner} is the winner` : ""}
         {board.every((b) => b != null) && !winner ? <span>No winner</span> : ""}
     </div>
  );
}

export default Board;


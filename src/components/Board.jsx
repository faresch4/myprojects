import Tile from "./Tile";

function Board({
  handleCLick,
  board,
  winner,
  handleMouseEnter,
  handleMouseLeave,
  unMount,
  isX,
}) {
let getClassName = (index) => {
  let className = ''
  if(![2,5,8].includes(index)) className += 'right-border '
  if(index < 6) className += 'bottom-border'
  return className
}
const commonProps = {
  unMount,
  winner,
  isX,
}
 console.log(getClassName(1))
  return (
    <div className="board">
      {board.map((value, index) => (
        <Tile
          key={index}
          className={getClassName(index)}
          doWhenClick={() => handleCLick(index)}
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

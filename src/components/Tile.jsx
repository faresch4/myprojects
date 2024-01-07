import { useState } from "react";
let Tile = ({
  doWhenClick,
  className,
  value,
  unMount,
  isX,
  handleClick,
  calculateWinner,
  winner,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  function handleMouseLeave() {
    setIsHovered(false); // fill the tile with board tile value in the hover case its null which it it will erase the tile
  }
  function handleMouseEnter() {
    if (!value && unMount) setIsHovered(true); // fill the tile with X or O
  }
  return (
    <button
      className={`tile ${className}`}
      onClick={doWhenClick}
      onMouseEnter={!handleClick && handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isHovered && value == null && winner==null
        ? isX
          ? "X"
          : "O"
        : value}
    </button>
  );
};
export default Tile;

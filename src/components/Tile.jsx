
function Tile({className,value, onClickTiles,over,out,isHovering}) {
    
    
    return ( 
        <button             
        onClick={onClickTiles} className={`tile ${className}`}  onMouseOver={over} onMouseOut={out}>{value}</button>
     );
}

export default Tile;
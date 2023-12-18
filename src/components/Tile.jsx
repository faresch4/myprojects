
function Tile({className,value, onClickTiles,over,out,isHovering}) {
    
    
    return ( 
        <button             
        onClick={onClickTiles}  onMouseOver={over} onMouseOut={out} className={isHovering ? 'hovered' : 'not-hovered'}>{value}</button>
     );
}

export default Tile;
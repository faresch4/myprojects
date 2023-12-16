function Tile({className,value, onClickTiles}) {
    return ( 
        <button className={`tile ${className}`} onClick={onClickTiles}>{value}</button>



     );
}

export default Tile;
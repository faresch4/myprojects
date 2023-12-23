function Tile({className}, value, doWhenClick) {
  return <button className={`tile ${className}`} onClick={doWhenClick}>{value}</button>;
}

export default Tile;

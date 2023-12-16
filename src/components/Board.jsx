import Tile from "./Tile";
import {useState} from 'react'

const PLAYER_X = 'X'
const PLAYER_O = 'O'
function Board() {
 
    const [tiles, setTiles] = useState(Array(9).fill(null))
    const [playerStatus, setPlayerStatus] = useState(PLAYER_X)
    function handleCLick(i) {
        const newTiles = tiles.slice()
        
        if(!tiles[i] && calculateWinner() === null) { // we use () to call the function to know its returned state
            if(playerStatus === PLAYER_X) {
                newTiles[i] = 'X'
            setPlayerStatus(PLAYER_O)
            }else {
                newTiles[i] = 'O'
                setPlayerStatus(PLAYER_X)
            }
            setTiles(newTiles)
        }
        calculateWinner()
   
        }
        function Showwinner() {
            if(calculateWinner()) {
                return <span>Winner is {calculateWinner()}</span>
            }if(!calculateWinner() && tiles.every(element => element !== null))
            return <span>No winner</span>
               } 
    
 function calculateWinner() {
        let win = [[0,1,2], [3,4,5], [6,7,8],[0,4,8], [0,3,6], [1,4,7],[2,5,8],[2,4,6]]
   
        for(let combo of win ){
            if(tiles[combo[0]] == tiles[combo[1]] && tiles[combo[1]] == tiles[combo[2]]) {
               return tiles[combo[0]]
            }
        }
        return null
    }
    return ( <div className="board">
       
            <Tile  value = {tiles[0]}   onClickTiles = {() => {handleCLick(0)} } className='right-border bottom-border' />
            <Tile value = {tiles[1]} onClickTiles = {() => {handleCLick(1)} }   className='right-border bottom-border' />
            <Tile value = {tiles[2]}  onClickTiles = {() => {handleCLick(2)} }   className='bottom-border' />
         
        
            <Tile value = {tiles[3]} onClickTiles = {() => {handleCLick(3)} }   className='right-border bottom-border' />
            <Tile value = {tiles[4]}  onClickTiles = {() => {handleCLick(4)} } className='right-border bottom-border' />
            <Tile value = {tiles[5]} onClickTiles = {() => {handleCLick(5)} }    className='bottom-border' />
         
            <Tile value = {tiles[6]}  onClickTiles = {() => {handleCLick(6)} }  className='right-border ' />
            <Tile value = {tiles[7]} onClickTiles = {() => {handleCLick(7)} }   className='right-border ' />
            <Tile value ={tiles[8]} onClickTiles = {() => {handleCLick(8)} }   />
         
            <div className="strike">
            {Showwinner()}


    </div>
    </div>
  
 );
 
}


export default Board;

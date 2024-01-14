import { useEffect, useState,useContext} from "react";
import {  movieSearcher } from '../assets/contexts/dataHolder';
import icon from '../Icons/search.png'
import SearchBtn from './SearchBtn';
function SearchBar() {
      let {input, setInput} = useContext(movieSearcher)
    return ( 
       <div >
        <input type="text" className="search-bar" placeholder='Search for movies...' onChange={(e) => {
           setInput(e.target.value)
        }}/> 
        <SearchBtn input={input}/>
       </div>
     );
}

export default SearchBar;
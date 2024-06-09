import icon from '../Icons/search.png'
import {  movieSearcher } from '../assets/contexts/dataHolder';
import { useEffect, useState,useContext} from "react";

function SearchBtn() {
    let {input, check} = useContext(movieSearcher)

    
    return (  
       <div>
        <img src={icon} className='icon' title='Search' onClick={check}></img>
        
       </div>
       
        
    );
}

export default SearchBtn;
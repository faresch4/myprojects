import react, { useContext } from 'react'
import { useState } from "react";
import { Mycontext } from '../assets/contexts/dataHolder';
function Bar() {
    let {movie, setMovie} = useContext(Mycontext)
    return ( 
       <div >
        <input type="text" className="bar" onChange={(e) => {
          setMovie(e.target.value)
        }} /> 
       </div>
     );
}

export default Bar;
import MovieBox from './MovieBox'
import blackphone from '../Covers/blackphone.jpg'
import paranormalactivity1 from '../Covers/Pa1.jpg'
import sinister from '../Covers/sinister.jpg'
import wows from '../Covers/wows.webp'
import purge from '../Covers/purge.jpg'
import harrypoter from '../Covers/harrypoter.jpg'
import shameless from '../Covers/shameless.jpg'
import {  movieSearcher } from '../assets/contexts/dataHolder';
import { useEffect, useState,useContext} from "react";


function MovieList() {
    let movie = [ {title: 'blackphone', posterURL: blackphone},
    {title: 'pa1', posterURL: paranormalactivity1},
    {title: 'sinister', posterURL: sinister},
    {title: 'wows', posterURL: wows},
    {title: 'purge', posterURL: purge},
    {title: 'harrypoter', posterURL: harrypoter},
    {title: 'shameless', posterURL: shameless},

]
    const [moviesArr, setMoviesArr] = useState(movie)
  
const {input,setInput,check} = useContext(movieSearcher)
useEffect(() => {
   const filteredMovies = input ? movie = movie.filter((t)=> {
    return t.title === (input.toLowerCase()).replace()
  } ) : movie
  setMoviesArr(filteredMovies)

        
         
       
           
          
           
  
       
    
  
},[input])
  


    return ( 
        <div className='movieList'>
         {moviesArr.map((el,jj)=> ( <MovieBox posterURL={el.posterURL} title={el.title} key={jj}/>))}
        </div>
       

     );
}

export default MovieList;
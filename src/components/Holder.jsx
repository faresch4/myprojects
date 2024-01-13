import MovieList from "./MovieList";
import Search from "./Search";
import SearchHolder from "./SearchHolder";
import { Mycontext } from "../assets/contexts/dataHolder";
function Holder() {
   
    return ( 
        <>
       
        <SearchHolder />
     
        <MovieList />
        </>
     );
}

export default Holder;
import Bar from "./Bar";
import Search from "./Search";
import { Mycontext } from "../assets/contexts/dataHolder";
import { useEffect, useState } from "react";
const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=646235ab";
function SearchHolder() {
  const [movie, setMovie] = useState(null);
  const [resultTitle, setResultTitle] = useState(null)
  async function getMovieData() {
    let response = await fetch(API_URL);
    let responseData = await response.json();
    return responseData;
  }
  useEffect(() => {
    async function callAsync() {
      try {
        let result = await getMovieData();
         setResultTitle(result)
      } catch (err) {
        console.error(err.message);
      }
    }
    callAsync();
    // movie === getMovieData().Title ? <span>{movie}</span> : ''
  }, [movie]);
  return (
    <div className="search-holder">
      <Mycontext.Provider value={{ movie, setMovie }}>
        <Bar />
      </Mycontext.Provider>

      <Search />
      { resultTitle && movie  === resultTitle.Title && <span>{movie}</span>}
    </div>
  );
}

export default SearchHolder;

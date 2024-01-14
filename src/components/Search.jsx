import { useEffect, useState,useContext} from "react";
import React from "react";
import SearchBtn from "./SearchBtn";
import SearchBar from "./SearchBar";
import Title from "./Title";
import {  movieSearcher } from '../assets/contexts/dataHolder';

function Search() {
  let {input, setInput,check} = useContext(movieSearcher)

  return (
    <div className="search">
      <Title />
      <SearchBar  input={input} setInput={setInput}/>

    </div>
  );
}

export default Search;

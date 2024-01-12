import { useState } from 'react'
import './App.css'
import SearchHolder from './components/SearchHolder'
import MovieList from './components/MovieList'
function App() {

  return (
    <>
      <SearchHolder />
      <MovieList />
    </>
  )
}

export default App

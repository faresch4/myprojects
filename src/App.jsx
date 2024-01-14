import { useState } from 'react'
import './App.css'
import Search from './components/Search'
import MovieList from './components/MovieList'
import Title from './components/Title'
import { movieSearcher } from './assets/contexts/dataHolder'
function App() {
  const [input, setInput] = useState('')
  function check() {
    return input == 'shameless'
    
 }
 
  return (
    <div className='app'>
      <movieSearcher.Provider  value={{input,check,setInput}}>
      <Search />
      <MovieList />

      </movieSearcher.Provider>
 
    </div>
     
  
  )
}

export default App

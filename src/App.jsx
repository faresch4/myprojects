import { useState } from 'react'
<<<<<<< HEAD
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from  'C:/Users/DELL/Desktop/Portfolio/vite-project/src/components/Header.jsx'
function App() {
    

  return (
    <>
     <Header /> 
    </>
=======
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
     
  
>>>>>>> 80b8a2e0db968c2a7182afd9f7ed1fc2162f1ee5
  )
}

export default App

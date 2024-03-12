
import { useState } from 'react';
import './App.css';
import Navigation from './component/Navigation';
import {moviesData} from "./Data"
import Movielist from './component/Movielist';
import Addmovie from './component/Addmovie';
import Filtermovies from './component/Filtermovies';

function App() {
  const[movies, setMovies] =useState(moviesData)
  const [inputSearch,setInputSearch]= useState("")
  
  const add=(newMovie)=>{
    setMovies([...movies,newMovie])
  }
  return (
    <div className="App">
      <Navigation/>
      <Filtermovies inputSearch={inputSearch} setInputSearch={setInputSearch} />
      <Addmovie add={add} />
      <Movielist movies={movies} inputSearch={inputSearch}/>
      
      
    </div>
  );
}

export default App;

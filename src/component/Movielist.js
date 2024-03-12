import React from 'react'
import Moviecard from './Moviecard'

const Movielist = ({movies,inputSearch}) => {
    // console.table([movies])
  return (
    <div style={{display:"flex", justifyContent:"space-around", flexWrap:"wrap", marginTop:"10%",}}>
        {
        movies
        .filter((movie)=>movie.title.toUpperCase().includes(inputSearch.toUpperCase()))
        .map((movie)=>
        <Moviecard movie={movie} key={movie.id}/>)

        }
    </div>
  )
}

export default Movielist
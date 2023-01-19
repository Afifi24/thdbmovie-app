import React from 'react'
import { useState,useEffect } from "react";
import MovieItem from './MovieItem';
import styled from 'styled-components';
import Filter from './Filter';
import {motion, AnimatePresence} from 'framer-motion'
const Movieapp = () => {
    const [popular,setPopular] =useState([])
    const [filtered,setFiltred] = useState([])
    const[genre,setGenre]= useState(0)
   
    const GetMovies = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=13aa08f7158e98f3eaf67a36b6c14e0a')
        const movies = await data.json()
        setPopular(movies.results)
        setFiltred(movies.results)
    }
    useEffect(()=>{
        GetMovies()
     },[])
   
   
  return (
    <Moviestyle 
    layout 
    
     >
      <AnimatePresence>
      <Filter popular={popular} setFiltred={setFiltred} genre={genre} setGenre={setGenre}/>
       <motion.div className="movie" initial={{opacity:0,scale:0}}
    animate={{opacity:1,scale:1,transition:{duration:1}}}
    >
       {filtered.map((movie,index)=>(
        <MovieItem genre={genre} key={index} movie={movie}/>
       ))}
       </motion.div>
       </AnimatePresence>
    </Moviestyle>
  )
}

export default Movieapp

const Moviestyle = styled(motion.div)`
width: var(--container-width-lg);
margin: auto;
padding: 5rem 0rem;
.movie{
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(220px,1fr));
    gap: 2rem;
}

/* media queries */


@media screen and (max-width:665px) {
    width: var(--container-width-md);
    
}
`
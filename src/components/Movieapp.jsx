import React from 'react'
import { useState,useEffect } from "react";
import MovieItem from './MovieItem';
import styled from 'styled-components';
import Filter from './Filter';
import {motion, AnimatePresence} from 'framer-motion'
const Movieapp = ({OpenClose,Popup,setFiltred,filtered}) => {
    const [popular,setPopular] =useState([])
    const [search,setSearch] = useState('')
    console.log(popular)
    
    const[genre,setGenre]= useState(0)
   const URL_API_popular = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=13aa08f7158e98f3eaf67a36b6c14e0a'
   const URL_API_hightRated = 'https://api.themoviedb.org/3/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=13aa08f7158e98f3eaf67a36b6c14e0a'


    const GetMovies = async (url)=>{
        const data = await fetch(url)
        const movies = await data.json()
        setPopular(movies.results)
        setFiltred(movies.results)
    }
    useEffect(()=>{
        GetMovies(URL_API_popular )
     },[])
   
   
  return (
    <Moviestyle 
    layout 
    
     >
      <AnimatePresence>
        <motion.div layout className="header">
        <div className="logo">THDB</div>
        <div className="search">
          <input value={search} onChange={(e)=>setSearch(e.target.value)} type="text" placeholder='Search' />
        </div>
        </motion.div>
      <Filter popular={popular} setFiltred={setFiltred} genre={genre} setGenre={setGenre}/>
       <motion.div className="movie" initial={{opacity:0,scale:0}}
    animate={{opacity:1,scale:1,transition:{duration:1}}}
    >
       {filtered.filter((item)=>{
        if(search ==''){
           return item;

        }
        else if ( item.title.toLowerCase().includes(search.toLocaleLowerCase())){
          return item;
        }
       }).map((movie,index)=>(
        <MovieItem Popup={Popup} OpenClose={OpenClose} genre={genre} key={index} movie={movie}/>
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
padding: 1rem 0rem;
.movie{
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
    gap: 2rem;
}
.header{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3rem;
  
}
.logo{
   font-weight: 700;
    text-align: center;
    font-size: 1.5rem;
    letter-spacing: 5px;
    -webkit-text-fill-color: transparent;
    background: linear-gradient(to left,var(--color-light-violet),var(--color-light-blue));
    -webkit-background-clip: text;
}
.search{
 input{
  width: 10rem;
  padding: 0.7rem 1rem;
  border-radius: 2rem;
  border: 2px solid transparent;
  background-color: var(--color-bg-variant);
  outline: none;
  color: var(--color-light);
  &:focus{
    background-color: transparent;
    border-color: var(--color-bg-variant) ;
  }
 }
}

/* media queries */


@media screen and (max-width:1024px) {
  width: var(--container-width-md);
  
}
@media screen and (max-width:665px) {
    .search{
 input{
  width: 12rem;
  padding: 0.6rem 1rem;
  
 }
}
    
}
`
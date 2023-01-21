import React ,{useState} from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
const MovieItem = ({movie,genre,OpenClose,Popup}) => {
  
  return (
    <Movieitemstyle layout initial={{opacity:0,}}
    animate={{opacity:1,transition:{duration:0.5}}} exit={{opacity:0}} key={genre}>
      <div  className="card">
      <div layout className="image">
     <img  src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path }alt="" />
     </div>
       <div className="card-content">
       <h3>{movie.title}</h3>
       <h4 >{movie.vote_average}</h4>
       </div>
       <button onClick={()=>{Popup(movie)}} className='details'>Details</button>
       {/* poster_path */}
       
      </div>
    </Movieitemstyle>
  )
}

export default MovieItem


const Movieitemstyle = styled(motion.div)`
.image{
    width: 100%;
    height: 50vh;
    overflow: hidden;
    border: 5px solid transparent;
    border-radius:1rem ;
    margin-bottom: 0.5rem;
}
img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: var(--transition);
    &:hover{
        transform: scale(1.2);
    }
}
h3{
    font-size: 0.9rem;
    /* margin: 1rem 0rem; */
    -webkit-text-fill-color: transparent;
    background: linear-gradient(to left,var(--color-light-violet),var(--color-light-blue));
    -webkit-background-clip: text;
    
}
.card{
  border: 1px solid transparent;
  padding: 0.5rem;
  border-radius: 1rem;
  height: 70vh;
  background-color: var(--color-bg-variant);
  &:hover{
    background-color: transparent;
    border-color: var(--color-primary);
  }
  &:hover h4{
    background-color: var(--color-bg-variant);
  }
}
.card-content{
  display: flex;
  margin-top: 1rem;
  justify-content: space-between;
  padding: 0rem 0.5rem;
  align-items: center;
  h4{
    background-color: var(--color-bg);
    padding: 0.2rem 0.5rem;
    /* display: flex; */
    transition: var(--transition);
    color: var(--color-light);
  }
}
.details{
  margin-top: 0.6rem;
  margin-left: 0.5rem;
  padding: 0.4rem 1rem;
  background-color: var(--color-primary);
  border: none;
  border-radius: 0.3rem;
  cursor: pointer;
  color: var(--color-bg);

  transition: var(--transition);
  &:hover{
    background-color: var(--color-white);
  }
}

@media screen and (max-width:1024px) {
  
}
`
import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
const MovieItem = ({movie,genre}) => {
  return (
    <Movieitemstyle layout initial={{opacity:0,}}
    animate={{opacity:1,transition:{duration:0.5}}} exit={{opacity:0}} key={genre}>
      <h3>{movie.title}</h3>
     <div className="image">
     <img src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path }alt="" />
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
    
    &:hover{
        border-color:var(--color-bg-variant);
       
    }
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
    font-size: 0.8rem;
    margin-bottom: 1rem;
    color: #e2d9d9;
}
`
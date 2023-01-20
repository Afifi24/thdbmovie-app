import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
const Filter = ({setGenre,genre,setFiltred,popular}) => {
  useEffect(()=>{
    if(genre ===0){
      setFiltred(popular)
      return;
     }
     const filteredbyGenre = popular.filter(item=>item.genre_ids.includes(genre))
     setFiltred(filteredbyGenre)
  },[genre])
  return (
    <Filterstyle layout >
      <button onClick={()=>setGenre(0)} className={genre===0?'active btn':'btn'} >All</button>
      <button onClick={()=>setGenre(35)} className={genre===35?'active btn': 'btn'} >Comedy</button>
      <button onClick={()=>setGenre(28)} className={genre===28?'active btn': 'btn'} >Action</button>
      <button onClick={()=>setGenre(12)} className={genre===12?'active btn': 'btn'} >Adventure</button>
     
    </Filterstyle>
  )
}

export default Filter


const Filterstyle = styled(motion.div)`
margin-bottom: 3rem;
display: flex;
gap: 1.5rem;
.btn{
  width: 7rem;
  height: 2.3rem;
  border: none;
  border-radius: 0.3rem;
  cursor: pointer;
  color: var(--color-primary);
  background-color: transparent;
  border: 1px solid var(--color-primary);
  transition: var(--transition);

  &:hover{
    background-color: var(--color-white);
  color: var(--color-bg);
  border: transparent;
  }
}
.active{
  background-color: var(--color-primary);
  color: var(--color-bg);
  border: transparent;

}
@media screen and (max-width:665px) {
gap: 0.5rem;
}
`
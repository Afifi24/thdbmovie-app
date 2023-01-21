import React,{useRef,useEffect} from 'react'
import styled from 'styled-components'
import img from '../images/design9.png'
import {FaRegTimesCircle}  from 'react-icons/fa'
const PopupCard = ({setIsopen,elements}) => {
    const useref = useRef()
   const Close = (e)=>{
    if(useref.current==e.target){
        setIsopen(false)
    }
    const {title,vote_average} = elements
   }
  return (
    <Popstyle>
      <div onClick={Close} ref={useref} className="container">
           <div className="popcard">
            <div className="image">
                <img src={"https://image.tmdb.org/t/p/w500" + elements.poster_path} alt="" />
            </div>
            <div className="content">
                <h2>{elements.title}</h2>
                <p>{elements.overview}</p>
                 <div className="date-rating">
                    <h4 className='date'>{elements.release_date}</h4>
                 <h4 className='rating'>{elements.vote_average}</h4>
                 </div>
                <button onClick={()=>setIsopen(false)}><FaRegTimesCircle/></button>
            </div>
           </div>
      </div>
    </Popstyle>
  )
}

export default PopupCard


const Popstyle = styled.div`
.container{
    background-color: rgba(0,0,0,0.8);
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
}
.popcard{
    height: 75%;
    width: 75%;
    background-color: #fff;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    place-items: center;
    position: relative;
    border-radius: 1rem;
    /* overflow: hidden; */
    box-shadow: 0rem 0rem 2rem rgba(256,256,256,0.4);
}
.image{
 border-top-left-radius: 1rem;
 border-bottom-left-radius: 1rem;
 height: 100%;
  overflow: hidden;
  width: 100%;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
.content{
    display: flex;
    position: relative;
    flex-direction: column;
    color: #000;
    width: 100%;
    height: 100%;
    padding:3rem 1rem ;
    gap: 2rem;
    button{
        position: absolute;
        right: -1.5rem;
        top: -1.5rem;
        font-size: 2rem;
        font-weight: 400;
        background-color: transparent;
        border: none;
        cursor: pointer;
        color: var(--color-white);
       
    }
   
}
.date-rating{
    position: absolute;
    bottom: 2rem;
    display: flex;
    justify-content: space-between;
    padding: 0rem 1rem;
    width: 90%;
    .rating{
        background-color: var(--color-primary);
        padding: 0.3rem 0.5rem;
        border-radius: 0.5rem;
        color: var(--color-bg);
    }
    .date{
        -webkit-text-fill-color: transparent;
        background: linear-gradient(to left,var(--color-light-violet),var(--color-primary));
        -webkit-background-clip:text;
    }
}

/* ===MEDIA QUERIES=== */
@media screen and (max-width:1024px) {
 .popcard{
    width: 70%;
    height: 70%;
 }
  
}
@media screen and (max-width:800px) {
 .popcard{
    grid-template-columns: 1fr;
    gap: 0rem;
    
 }
 .image{
    height: 38vh;
    margin-top: -5rem;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
   border-bottom-left-radius: 0rem;
 }
  .content{
    position: unset;
    padding-top: 0;
    padding-bottom: 0;
    button{
        position: absolute;
        right: -1.5rem;
        top: -3.3rem;
        font-size: 2rem;
        font-weight: 400;
        background-color: transparent;
        border: none;
        cursor: pointer;
        color: var(--color-white);
       
    }
  }
}
`
import  Globalstyle from "./Globalstyle";
import Movieapp from "./components/Movieapp";
import { useState } from "react";
import PopupCard from "./components/PopupCard";
import { AnimatePresence } from "framer-motion";
function App() {
  const [elements,setElements] = useState([])
  const [isopen,setIsopen] = useState(false)
  const [filtered,setFiltred] = useState([])


  const Popup = (item) =>{
     OpenClose()
      const elementitem = filtered.filter(elem=>elem.id==item.id)
      setElements(item)
  }
    const OpenClose = ()=>{
      setIsopen(!isopen)
    }
  return (
    <div >
      <AnimatePresence>
      <Globalstyle/>
     <Movieapp setFiltred={setFiltred} filtered={filtered} OpenClose={OpenClose} Popup={Popup}/>
     {isopen && <PopupCard key={isopen} isopen={isopen} elements={elements} setIsopen={setIsopen}/>}
     </AnimatePresence>
    </div>
  );
}

export default App;

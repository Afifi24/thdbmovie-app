export const card = {
    hidden:{
        opacity: 0, scale: 0 
    },
    show:{
        opacity: 1, scale: 1, transition: { duration: 0.5 }
    },
    exit:{
      opacity: 0,
       scale: 0.4,
        transition:
         { duration: 0.5,
        ease:'easeOut' }
    }
}
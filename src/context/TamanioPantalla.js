import { createContext, useEffect, useState } from "react";

const TamanioPantallaContext = createContext()


function TamanioPantallaProvider ({children}) {

  // query de mobile 
  const [esMobil , setEsMobil] = useState(window.innerWidth < 750);

  useEffect(()=> {

    function resizePantalla() {
      setEsMobil(window.innerWidth < 750)
    }

    window.addEventListener('resize',resizePantalla)


    return () => {window.removeEventListener('resize',resizePantalla)}
  },[])

  return (
    <TamanioPantallaContext.Provider value={{esMobil}}>
      {children}
    </TamanioPantallaContext.Provider>
  )
}

export {TamanioPantallaContext , TamanioPantallaProvider}
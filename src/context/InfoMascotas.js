import { createContext, useEffect, useState } from "react";

const InfoMascotasContext = createContext()

function InfoMascotasProvider ({children}) {

  const [nombreMascota, setNombreMascota] = useState('');
  const [especieMascota, setEspecieMascota] = useState('');
  const [razaMascota, setRazaMascota] = useState('');
  const [fechaNacimientoMascota, setFechaNacimientoMascota] = useState('');
  const [fotoMascota, setFotoMascota] = useState('');
  const [infoMascota, setInfoMascota] = useState(()=> {
    const datosGuardados = localStorage.getItem('infoMascotas');
    return datosGuardados ? JSON.parse(datosGuardados) : [];
  })

  // guardar en el localStorage cada vez que infoMascotas cambie 
  useEffect(()=> {
    localStorage.setItem('infoMascotas',JSON.stringify(infoMascota))
  },[infoMascota])


  // funcion para guardar valores en mi infoMascota 

  function guardarInfoMascota(e) {
    e.preventDefault()

    console.log('datos guardados con exito')

    if(!nombreMascota || !especieMascota || !razaMascota || !fechaNacimientoMascota || !fotoMascota ) {
      alert('Porfavor rellene todos los campos')
      return 
    }

    const nuevaMascota = {
      id: Date.now(),
      nombre: nombreMascota,
      especie: especieMascota,
      raza: razaMascota,
      fecha: fechaNacimientoMascota,
      foto: fotoMascota
    }

    setInfoMascota(prevMascota => [...prevMascota, nuevaMascota])

    setNombreMascota('')
    setEspecieMascota('')
    setRazaMascota('')
    setFechaNacimientoMascota('')
    setFotoMascota('')
  }

  // funcion eliminar mascota 
  function eliminarMascota(id) {
    if(window.confirm('Seguro que deseas eliminar?')) {
      setInfoMascota((prev) => prev.filter(mascota => mascota.id !== id))
    }
  }

  return (
    <InfoMascotasContext.Provider value={{
      nombreMascota,
      especieMascota,
      razaMascota,
      fechaNacimientoMascota,
      fotoMascota,
      infoMascota,

      setNombreMascota,
      setEspecieMascota,
      setRazaMascota,
      setFechaNacimientoMascota,
      setFotoMascota,

      guardarInfoMascota,
      eliminarMascota
    }}>
      {children}
    </InfoMascotasContext.Provider>
  )
}


export {InfoMascotasContext, InfoMascotasProvider}
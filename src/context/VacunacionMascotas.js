import { createContext, useEffect, useState } from "react";

const VacunacionMascotaContext = createContext()


function VacunacionMascotaProvider({children}) {

  const [seleccionMascota, setSeleccionMascota] = useState('');
  const [nombreVacuna , setNombreVacuna] = useState('');
  const [fechaAdministracion, setFechaAdministracion] = useState('');
  const [proximaFechaVacunacion, setProximaFechaVacunacion] = useState('')
  const [infoVacunacionMascota, setInfoVacunacionMascota] = useState(()=> {
    try {
      const datosGuardados = localStorage.getItem('vacunacionMascota');
      return datosGuardados ? JSON.parse(datosGuardados) : [];
    } catch (error) {
      console.error('Error al analizar los datos de vacunacion', error)
      return [];
    }
    
  })


  // guardar en el local storage cada vez que infoVacunacionMascota cambie 
  useEffect(()=> {
    localStorage.setItem('vacunacionMascota', JSON.stringify(infoVacunacionMascota))
  },[infoVacunacionMascota])

  // funcion para guardar los cambios 
  function guardarInfoVacuna (e) {
    e.preventDefault()
    if(!seleccionMascota || !nombreVacuna || !fechaAdministracion || !proximaFechaVacunacion) {
      alert('Porfavor complete todos los campos')
      return
    }

    const nuevaVacuna = {
      id: Date.now(),
      mascota: seleccionMascota,
      vacuna: nombreVacuna,
      fechaAdministracion: fechaAdministracion,
      proximaFechaVacunacion: proximaFechaVacunacion
    }

    setInfoVacunacionMascota((prevVacuna) => {
      const nuevaVacunas = [...prevVacuna, nuevaVacuna];
      localStorage.setItem('vacunacionMascota',JSON.stringify(nuevaVacunas))
      return nuevaVacunas
    })

    setSeleccionMascota('');
    setNombreVacuna('');
    setFechaAdministracion('')
    setProximaFechaVacunacion('')

    console.log('guardando datos')
  }

  // funcion para eliminar vacuna 
  function eliminarVacuna(id) {
    if (window.confirm("¿Seguro que deseas eliminar esta vacuna?")) {
      setInfoVacunacionMascota((prev) => prev.filter(vacuna => vacuna.id !== id));
    }
  }


  return(
    <VacunacionMascotaContext.Provider value={{
      seleccionMascota,
      nombreVacuna,
      fechaAdministracion,
      proximaFechaVacunacion,
      infoVacunacionMascota,


      setSeleccionMascota,
      setNombreVacuna,
      setFechaAdministracion,
      setProximaFechaVacunacion,


      guardarInfoVacuna,
      eliminarVacuna
    }}>
      {children}
    </VacunacionMascotaContext.Provider>
  )
}

export {VacunacionMascotaContext, VacunacionMascotaProvider}
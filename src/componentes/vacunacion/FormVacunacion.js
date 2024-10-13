import React, { useContext } from "react";
import '../../estilos/vacunacion/FormVacunacion.css'
import { VacunacionMascotaContext } from "../../context/VacunacionMascotas.js";
import { InfoMascotasContext } from "../../context/InfoMascotas.js";

function FormVacunacion() {

  const {
    seleccionMascota,
    nombreVacuna,
    fechaAdministracion,
    proximaFechaVacunacion,


    setSeleccionMascota,
    setNombreVacuna,
    setFechaAdministracion,
    setProximaFechaVacunacion,

    guardarInfoVacuna
  } = useContext(VacunacionMascotaContext)

  const{infoMascota} = useContext(InfoMascotasContext)



  // funciones para guardar los cambios 

  function handleCambioSeleccionMascota(e) {
    setSeleccionMascota(e.target.value)
  }

  function handleCambioNombreVacuna(e) {
    setNombreVacuna(e.target.value)
  }

  function handleCambioFechaAdministracion(e) {
    setFechaAdministracion(e.target.value)
  }

  function handleCambioProximaFechaVacunacion(e) {
    setProximaFechaVacunacion(e.target.value)
  }
  

  return (
    <form className="vacunacion__form">
      <h2>Agregar Nueva Vacuna</h2>
      <div className="vacunacion__form-grupo">
        <label htmlFor="mascota">Mascota:</label>
        <select 
          value={seleccionMascota} 
          onChange={handleCambioSeleccionMascota}  
          className="vacunacion__form-input" 
          name="mascota" 
          id="mascota" 
          required
        >
          <option value>Seleccione una mascota</option>
          {infoMascota.map((mascota)=> (
            <option key={mascota.id} id={mascota.id}>
              {mascota.nombre}
            </option>
          ))}
        </select>
      </div>
      <div className="vacunacion__form-grupo">
        <label htmlFor="vacuna">Nombre de la Vacuna:</label>
        <input 
          type="text" 
          className="vacunacion__form-input" 
          name="vacuna" 
          id="vacuna" 
          required
          value={nombreVacuna}
          onChange={handleCambioNombreVacuna}
        />
      </div>
      <div className="vacunacion__form-grupo">
        <label htmlFor="fecha-administracion">Fecha de Administracion</label>
        <input 
          type="date" 
          className="vacunacion__form-input" 
          name="fecha-administracion" 
          id="fecha-administracion" 
          required
          value={fechaAdministracion}
          onChange={handleCambioFechaAdministracion}
        />
      </div>
      <div className="vacunacion__form-grupo">
        <label htmlFor="pr-fecha-vacunacion">Proxima Fecha de Vacunacion</label>
        <input 
          type="date" 
          className="vacunacion__form-input" 
          name="pr-fecha-vacunacion" 
          id="pr-fecha-vacunacion" 
          required
          value={proximaFechaVacunacion}
          onChange={handleCambioProximaFechaVacunacion}
        />
      </div>
      <button className="vacunacion__form-boton" onClick={guardarInfoVacuna}>Registrar Vacuna</button>
    </form>
  )
}

export default FormVacunacion
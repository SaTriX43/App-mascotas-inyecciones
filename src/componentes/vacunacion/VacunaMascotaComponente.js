import React from "react";
import '../../estilos/vacunacion/VacunaMascotaComponente.css'
import Chester from '../../assets/imagenes/fondo-animal.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function VacunaMascotaComponente({id,eliminarVacuna,nombre, foto,vacuna,fechaAdministracion,proximaFechaVacunacion}) {
  return (
    <article className="vacunacion__historial-componente">
      <FontAwesomeIcon
        icon={faTrash}
        className="icono-trash"
        onClick={()=> eliminarVacuna(id)}
      />
      <div className="vacunacion__historial-componente-contenedor-img">
        <img src={foto} alt={nombre} className="vacunacion__historial-imagen"/>
      </div>
      <div className="vacunacion__historial-componente-contenedor-info">
        <h3>{nombre}</h3>
        <p>Vacuna : <b>{vacuna}</b></p>
        <p>Fecha de Administracion: <b>{fechaAdministracion}</b></p>
        <p>Proxima Fecha de vacunacion: <b>{proximaFechaVacunacion}</b></p>
      </div>
      
      
    </article>
  )
}

export default VacunaMascotaComponente
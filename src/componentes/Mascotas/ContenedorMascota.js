import React from "react";
import '../../estilos/Mascotas/ContenedorMascota.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function ContenedorMascota({id, eliminarMascota , nombre, raza, especie, fecha, foto}) {

  return(
    <div className="mascotas__vista-contenedor-componente">
      <FontAwesomeIcon
        icon={faTrash}
        className="icono-trash"
        onClick={()=> eliminarMascota(id)}
      />
      <div className="mascotas__vista-contenedor-componente-imagen">
        <img src={foto} alt={nombre} className="mascotas__imagen"/>
      </div>
      <div className="mascotas__vista-contenedor-componente-info">
        <h3>{nombre}</h3>
        <p>Especie <b>{especie}</b></p>
        <p>Raza <b>{raza}</b></p>
        <p>Fecha de nacimiento: <b>{fecha}</b></p>
      </div>
    </div>
  )
}

export default ContenedorMascota
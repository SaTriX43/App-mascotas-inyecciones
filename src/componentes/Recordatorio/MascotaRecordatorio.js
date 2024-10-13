import React from "react";
import '../../estilos/Recordatorio/MascotaRecordatorio.css'


function MascotaRecordatorio({id, nombre,especie, foto, vacuna, fecha}) {
  return (
    <div className="recordatorio-mascota-componente">
      <div className="recordatoio-mascota-componente-contenedor-imagen">
        <img src={foto} className="recordatorio-imagen" alt={nombre}/>
      </div>
      <div className="recordatoio-mascota-componente-contenedor-info">
        <h3>{nombre} ({especie})</h3>
        <p>Vacuna: <b>{vacuna}</b></p>
        <p>Fecha: <b>{fecha}</b></p>
        <p className="recordatorio-mascota-estado">Realizada</p>
        <button className="recordatorio-componente-boton">Marcar como realizada</button>
      </div>
      

    </div>
  ) 
}

export default MascotaRecordatorio
import React, { useContext } from "react";
import '../../estilos/Recordatorio/MascotaRecordatorio.css';
import { VacunacionMascotaContext } from "../../context/VacunacionMascotas";

function MascotaRecordatorio({id, nombre, especie, foto, vacuna, fecha, estado }) {

  const{marcarComoRealizada} = useContext(VacunacionMascotaContext)

  function handleMarcar() {
    marcarComoRealizada(id)
  }

  return (
    <div className="recordatorio-mascota-componente">
      <div className="recordatoio-mascota-componente-contenedor-imagen">
        <img src={foto} className="recordatorio-imagen" alt={nombre} />
      </div>
      <div className="recordatoio-mascota-componente-contenedor-info">
        <h3>{nombre} ({especie})</h3>
        <p>Vacuna: <b>{vacuna}</b></p>
        <p>Fecha: <b>{fecha}</b></p>
        <p className={`recordatorio-mascota-estado ${estado}`}>{estado.charAt(0).toUpperCase() + estado.slice(1)}</p>
        {estado === 'pendiente' && <button onClick={handleMarcar} className="recordatorio-componente-boton">Marcar como realizada</button>}
      </div>
    </div>
  );
}

export default MascotaRecordatorio;

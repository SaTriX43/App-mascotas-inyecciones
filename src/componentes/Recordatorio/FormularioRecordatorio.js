import React, { useState } from "react";
import '../../estilos/Recordatorio/FormularioRecordatorio.css'

function FormularioRecordatorio() {

  const [buscadorRecordatorio, setBuscadorRecordatorio] = useState('');
  const [estadoRecordatorio, setEstadoRecordatorio] = useState('');

  function handleCambioBuscadorRecordatorio(e) {
    setBuscadorRecordatorio(e.target.value)
  }

  function handleCambioEstadoRecordatorio(e) {
    setEstadoRecordatorio(e.target.value)
  }

  return (
    <form className="recordatorio__form">
      <input 
        type="text" 
        className="recordatorio__form-input" 
        name="recordatorio-buscador"
        value={buscadorRecordatorio}
        onChange={handleCambioBuscadorRecordatorio}
        placeholder="Buscar por nombre o vacuna"
      />
      <select name="recordatorio-estados" value={estadoRecordatorio} onChange={handleCambioEstadoRecordatorio}>
        <option value>Todos los estados</option>
        <option value="pendiente">Pendiente</option>
        <option value="realizada">Realizada</option>
        <option value="Atrasada">Atrasada</option>
      </select>
    </form>
  )
}

export default FormularioRecordatorio
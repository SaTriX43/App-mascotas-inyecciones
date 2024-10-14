import React, { useContext, useState } from "react";
import FormularioRecordatorio from "./FormularioRecordatorio";
import '../../estilos/Recordatorio/Recordatorio.css'
import MascotaRecordatorio from "./MascotaRecordatorio";
import { InfoMascotasContext } from "../../context/InfoMascotas";
import { VacunacionMascotaContext } from "../../context/VacunacionMascotas.js";

function Recordatorio() {

  const {infoMascota} = useContext(InfoMascotasContext)
  const {infoVacunacionMascota} = useContext(VacunacionMascotaContext)


  const [buscadorRecordatorio, setBuscadorRecordatorio] = useState('');
  const [estadoRecordatorio, setEstadoRecordatorio] = useState('');

  const vacunaFiltrada = infoVacunacionMascota.filter((recordatorio) => {
    // Buscar por vacuna y nombre de mascota
    const vacunaCoincide = recordatorio.vacuna.toLowerCase().includes(buscadorRecordatorio.toLowerCase());
    const mascota = infoMascota.find(m => m.nombre === recordatorio.mascota);
    const mascotaCoincide = mascota ? mascota.nombre.toLowerCase().includes(buscadorRecordatorio.toLowerCase()) : false;

    // Filtrar por estado
    const estadoCoincide = estadoRecordatorio === '' || calcularEstado(recordatorio) === estadoRecordatorio;

    return (vacunaCoincide || mascotaCoincide) && estadoCoincide;
  });

  // funcion para calcular estado 
  function calcularEstado(recordatoio) {
    const fechaActual = new Date();
    const fechaVacuna = new Date(recordatoio.proximaFechaVacunacion)

    if(fechaActual > fechaVacuna) {
      return 'atrasada'
    }else if(recordatoio.realizada) {
      return 'realizada'
    }
    return 'pendiente'
  }

  
  return (
    <section className="recordatorio">
      <FormularioRecordatorio
        buscadorRecordatorio= {buscadorRecordatorio}
        estadoRecordatorio= {estadoRecordatorio}
        setBuscadorRecordatorio= {setBuscadorRecordatorio}
        setEstadoRecordatorio = {setEstadoRecordatorio}
      />
      <h1>Proximas Vacunas</h1>
      
        {vacunaFiltrada.length > 0 ? (
          <div className="recordatorio__contenedor-mascota"> 
            {vacunaFiltrada.map((recordatorio)=> {
              const mascota = infoMascota.find((m) => m.nombre === recordatorio.mascota)
              return(
                <MascotaRecordatorio
                  key={recordatorio.id}
                  id={recordatorio.id}
                  nombre= {mascota ? mascota.nombre : ''}
                  foto = {mascota ? mascota.foto : ''}
                  vacuna = {recordatorio.vacuna}
                  fecha = {recordatorio.fechaAdministracion}
                  especie={mascota ? mascota.especie : ''}
                  estado={calcularEstado(recordatorio)}
                />
              )
            })}
          </div>
        ): (
          <div className="recordatorio__sin-contenedor-mascota">
            <h2>No hay recordatorios</h2>
          </div>
        )}
        
     
    </section>
  )
}

export default Recordatorio
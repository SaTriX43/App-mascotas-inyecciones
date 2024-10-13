import React, { useContext } from "react";
import FormularioRecordatorio from "./FormularioRecordatorio";
import '../../estilos/Recordatorio/Recordatorio.css'
import MascotaRecordatorio from "./MascotaRecordatorio";
import { InfoMascotasContext } from "../../context/InfoMascotas";
import { VacunacionMascotaContext } from "../../context/VacunacionMascotas.js";

function Recordatorio() {

  const {infoMascota} = useContext(InfoMascotasContext)
  const {infoVacunacionMascota} = useContext(VacunacionMascotaContext)

  return (
    <section className="recordatorio">
      <FormularioRecordatorio/>
      <h1>Proximas Vacunas</h1>
      
        {infoVacunacionMascota.length > 0 ? (
          <div className="recordatorio__contenedor-mascota"> 
            {infoVacunacionMascota.map((recordatorio)=> {
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
import React, { useContext } from "react";
import '../../estilos/vacunacion/HistorialVacunacion.css';
import { InfoMascotasContext } from "../../context/InfoMascotas";
import { VacunacionMascotaContext } from "../../context/VacunacionMascotas";
import VacunaMascotaComponente from "./VacunaMascotaComponente";

function HistorialVacunacion() {
  const { infoVacunacionMascota , eliminarVacuna } = useContext(VacunacionMascotaContext);
  const { infoMascota } = useContext(InfoMascotasContext);

  return (
    <section className="vacunacion__historial">
      <h2>Historial de Vacunación</h2>
      {infoVacunacionMascota.length > 0 ? (
        <div className="vacunacion__historial-contenedor-componentes">
          {infoVacunacionMascota.map((vacuna) => {
            const mascota = infoMascota.find((m) => m.nombre === vacuna.mascota);
            return (
              <VacunaMascotaComponente
                key={vacuna.id}
                id={vacuna.id}
                nombre={mascota ? mascota.nombre : "Desconocido"}
                foto={mascota ? mascota.foto : ''}
                vacuna={vacuna.vacuna}
                fechaAdministracion={vacuna.fechaAdministracion}
                proximaFechaVacunacion={vacuna.proximaFechaVacunacion}
                eliminarVacuna = {eliminarVacuna}
              />
            );
          })}
        </div>
      ) : (
        <div className="vacunacion__historial-contenedor-componentes">
          <h3>No hay Vacunas disponibles</h3>
        </div>
      )}
    </section>
  );
}

export default HistorialVacunacion;

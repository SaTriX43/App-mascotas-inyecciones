import React from "react";
import '../../estilos/vacunacion/Vacunacion.css'
import FormVacunacion from "./FormVacunacion";
import HistorialVacunacion from "./HistorialVacunacion";

function Vacunacion() {
  return (
    <section className="vacunacion">
      <h1>Registro de Vacunas</h1>
      <FormVacunacion/>
      <HistorialVacunacion/>
    </section>
  )
}



export default Vacunacion
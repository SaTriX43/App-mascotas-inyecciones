import React from "react";
import FormularioMascotas from "./FormularioMascotas";
import '../../estilos/Mascotas/Mascotas.css'
import VistaMascotas from "./VistaMascotas";

function Mascotas() {
  return (
    <section className="mascotas">
      <h1>Gestion de Mascotas</h1>
      <FormularioMascotas/>
      <VistaMascotas/>
    </section>
  )
}

export default Mascotas
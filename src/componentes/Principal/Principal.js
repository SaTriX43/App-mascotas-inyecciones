import React from "react";
import '../../estilos/Principal/Principal.css'
import Bienvenida from "./Bienvenida";
import Servicios from "./Servicios";

function Principal() {
  return (
    <main className="principal">
      <Bienvenida/>
      <Servicios/>
    </main>
  )
}

export default Principal
import React from "react";
import '../../estilos/Principal/Bienvenida.css'

function Bienvenida() {
  return (
    <section className="principal__bienvenida">
      <div className="principal__bienvenida-fondo"></div>
      <article className="principal__bienvenida-contenedor">
        <h2>Bienvenido al Sistema de Gestion de Mascotas</h2>
        <p>Cuida la salud de tus amigos peludos con nuestro sistema de seguimiento de vacunas</p>
        <button className="principal__bienvenida-boton">Comenzar</button>
      </article>
    </section>
  )
}

export default Bienvenida
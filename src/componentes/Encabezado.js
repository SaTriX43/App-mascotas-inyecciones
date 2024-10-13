import React, { useContext, useState } from "react";
import '../estilos/Encabezado.css'
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TamanioPantallaContext } from "../context/TamanioPantalla";
import { Link } from "react-router-dom";

function Encabezado() {

  const [navActivo , setNavActivo] = useState(false)
  const {esMobil} = useContext(TamanioPantallaContext)


  return (
    <header className="encabezado">
      <h1>SaTriXPets</h1>
      <FontAwesomeIcon
        icon={faBars}
        className={`encabezado-icono ${esMobil ? '' : 'encabezado-icono-desactivado'}`}
        onClick={() => setNavActivo(!navActivo)}
      />
      <nav className={`encabezado__nav ${esMobil ? '' : 'encabezado-nav-desktop'} ${navActivo ? 'encabezado__nav-activo' : ''}`}>
        <Link to='/' className="encabezado__nav-items">Inicio</Link>
        <Link to='/mascotas' className="encabezado__nav-items">Mascotas</Link>
        <Link to='/vacunacion' className="encabezado__nav-items">Vacunas</Link>
        <Link to='/recordatorio' className="encabezado__nav-items">Recordatorios</Link>
      </nav>
    </header>
  )
}

export default Encabezado
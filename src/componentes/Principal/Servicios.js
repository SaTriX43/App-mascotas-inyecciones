import React from "react";
import '../../estilos/Principal/Servicios.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faDog, faSyringe } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Servicios() {
  return (
    <section className="principal__servicios">
      <div className="principal__servicios-grilla">
        <Link to='/mascotas' className="principal__servicios-contenedor">
          <FontAwesomeIcon
            icon={faDog}
            className="principal__servicios-iconos"
          />
          <h2>Gestion de Mascota</h2>
          <p>Registra y administra la información de tus mascotas fácilmente.</p>
        </Link>
        <Link to='/vacunacion' className="principal__servicios-contenedor">
          <FontAwesomeIcon
            icon={faSyringe}
            className="principal__servicios-iconos"
          />
          <h2>Registro de Vacunas</h2>
          <p>Mantén un registro detallado de las vacunas de tus mascotas.</p>
        </Link>
        <Link to='/recordatorio' className="principal__servicios-contenedor">
          <FontAwesomeIcon
            icon={faCalendarDays}
            className="principal__servicios-iconos"
          />
          <h2>Recordatorio</h2>
          <p>Recibe alertas para las próximas vacunas de tus mascotas.</p>
        </Link>
      </div>
    </section>
  )
}

export default Servicios
import React, { useContext, useState } from "react";
import '../../estilos/Mascotas/VistaMascotas.css'
import ContenedorMascota from "./ContenedorMascota";
import { InfoMascotasContext } from "../../context/InfoMascotas";

function VistaMascotas() {

  const {infoMascota,eliminarMascota} = useContext(InfoMascotasContext)

  const [nombreFiltro, setNombreFiltro] = useState('')
  const [especieFiltro, setEspecieFiltro] = useState('')


  function handleCambioNombre(e) {
    setNombreFiltro(e.target.value)
  }

  function handleCambioEspecie(e) {
    setEspecieFiltro(e.target.value)
  }

  // filtro para el nombre y especie 
  const infoMascotaFiltro = infoMascota.filter((mascota)=> {
    const nombreCoincide = mascota.nombre.toLowerCase().includes(nombreFiltro.toLowerCase());
    const especieCoincide = especieFiltro === '' || mascota.especie === especieFiltro;
    return nombreCoincide && especieCoincide;
  })

  return (
    <section className="mascotas__vista">
      <h2>Lista de Mascotas</h2>
      <form className="mascotas__vista-form">
        <div className="mascotas__vista-form-grupo">
          <label htmlFor="buscar-nombre">Nombre:</label>
          <input 
            className="mascotas__vista-form-input" 
            type="text" 
            name="buscar-nombre" 
            id="buscar-nombre" 
            placeholder="Buscar mascota por nombre"
            value={nombreFiltro}
            onChange={handleCambioNombre}
          />
        </div>
        <select className="mascotas__vista-form-input" name="buscar-especie" id="buscar-especie" value={especieFiltro}
            onChange={handleCambioEspecie}>
          <option value>Todas las especies</option>
          <option value="perro">Perro</option>
          <option value="gato">Gato</option>
          <option value="conejo">Conejo</option>
          <option value="otro">Otro</option>
        </select>
      </form>

      <div className="mascotas__vista-contenedor">
          {infoMascotaFiltro.length > 0 ? (
            infoMascotaFiltro.map((mascota)=> (
              <ContenedorMascota
                key={mascota.id}
                id={mascota.id}
                nombre={mascota.nombre}
                especie={mascota.especie}
                raza= {mascota.raza}
                fecha={mascota.fecha}
                foto={mascota.foto}
                eliminarMascota = {eliminarMascota}
              />
            ))
          ): (
            <h3>No hay resultados</h3>
          )}
      </div>
    </section>
  )
}

export default VistaMascotas
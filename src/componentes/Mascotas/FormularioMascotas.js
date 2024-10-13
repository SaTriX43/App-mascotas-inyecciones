import React, { useContext } from "react";
import '../../estilos/Mascotas/FormularioMascotas.css'
import { InfoMascotasContext } from "../../context/InfoMascotas";


function FormularioMascotas() {

  const {
    nombreMascota,
    especieMascota,
    razaMascota,
    fechaNacimientoMascota,
    fotoMascota,

    setNombreMascota,
    setEspecieMascota,
    setRazaMascota,
    setFechaNacimientoMascota,
    setFotoMascota,

    guardarInfoMascota
  } = useContext(InfoMascotasContext)


  // funciones para guardar los cambios 
  // ----------------------------------------------------- 
  function handleCambioNombreMascota(e) {
    setNombreMascota(e.target.value)
  }

  function handleCambioEspecieMascota(e) {
    setEspecieMascota(e.target.value)
  }

  function handleCambioRazaMascota(e) {
    setRazaMascota(e.target.value)
  }

  function handleCambioFechaNacimientoMascota(e) {
    setFechaNacimientoMascota(e.target.value)
  }

  function handleCambioFotoMascota(e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFotoMascota(reader.result); // Guarda la imagen en base64
      };
      reader.readAsDataURL(file); // Convierte la imagen a base64
    }
  }
  // -------------------------------------------------------- 

  return (
    <form className="mascotas__formulario">
      <h3>Agregar Mascota</h3>

      <div className="mascotas__formulario-grupo">
        <label htmlFor="nombre">Nombre:</label>
          <input 
            className="mascotas__formulario-input" 
            type="text" name="nombre" 
            id="nombre" 
            placeholder="Ej: Chester"
            value={nombreMascota}
            onChange={handleCambioNombreMascota}
            required
          />
      </div>
      {/* --------------------------------------------------------------- */}
      <div className="mascotas__formulario-grupo">
        <label htmlFor="especie">Especie:</label>
          <select 
            className="mascotas__formulario-input" 
            name="especie" 
            id="especie"
            value={especieMascota}
            onChange={handleCambioEspecieMascota}
            required
          >
            <option value>Selecciona una especie</option>
            <option value="perro">Perro</option>
            <option value="gato">Gato</option>
            <option value="conejo">Conejo</option>
            <option value="otro">Otro</option>
          </select>
      </div>
      {/* --------------------------------------------------------------- */}
      <div className="mascotas__formulario-grupo">
        <label htmlFor="raza">Raza</label>
          <input 
            className="mascotas__formulario-input" 
            type="text" 
            name="raza" 
            id="raza" 
            placeholder="Ej: Pekines"
            value={razaMascota}
            onChange={handleCambioRazaMascota}
            required
          />
      </div>
      {/* --------------------------------------------------------------- */}
      <div className="mascotas__formulario-grupo">
        <label htmlFor="nacimiento">Fecha de nacimiento:</label>
          <input 
            className="mascotas__formulario-input" 
            type="date" 
            id="nacimiento" 
            name="nacimiento"
            value={fechaNacimientoMascota}
            onChange={handleCambioFechaNacimientoMascota}
            required
          />
      </div>
      {/* --------------------------------------------------------------- */}
      <div className="mascotas__formulario-grupo">
        <label htmlFor="foto">Foto</label>
          <input 
            className="mascotas__formulario-input" 
            type="file" 
            id="foto" 
            name="foto" 
            accept="image/*"
            onChange={handleCambioFotoMascota}
            required
          />
      </div>
      {/* --------------------------------------------------------------- */}
      <button className="mascotas__formulario-boton" onClick={guardarInfoMascota}>Agregar Mascota</button>
    </form>
  )
}


export default FormularioMascotas
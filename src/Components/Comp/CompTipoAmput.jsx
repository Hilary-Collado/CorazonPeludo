import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../App.css";

const TipoAmputacion = ({onChange, disabled, value}) => {
  const [amputaciones, setAmputaciones] = useState([]);

  useEffect(() => {
    const fetchTipoAmp = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/tipoAmputacion"
        );
        setAmputaciones(response.data);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };
    fetchTipoAmp();
  }, []);

  const handleSelectChange = (e) => {
    const selectedId = parseInt(e.target.value);
    console.log("🔍 ID seleccionado (TipoAmputacion):", selectedId); // 👈 Agrega esto
    onChange(selectedId); // Enviamos el id al componente padre
  }; 
  
  return (
    <>
        <label htmlFor="tipoAmputacion" className="capp form-label">
          tipo de Amputaciones
        </label>
        <select id="tipoAmputacion" className="form-select" disabled={disabled} onChange={handleSelectChange} value={value}>
          <option value="">Seleccione una opcion</option>
          {amputaciones.map((item) => (
            <option key={item.idTipoAmputaciones} value={item.idTipoAmputaciones}>
              {item.descripcion}
            </option>
          ))}
        </select> 
    </>
  );
};
export default TipoAmputacion;

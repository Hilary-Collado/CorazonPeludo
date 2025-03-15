import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../App.css";

const TipoAmputacion = () => {
  const [amputaciones, setAmputaciones] = useState([]);

  useEffect(() => {
    const fetchTipoAmp = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/tipoAmputacion"
        );
        setAmputaciones(response.data);
        console.log("API response in tipo de amputacion: ", response.data);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };
    fetchTipoAmp();
  }, []);

  return (
    <>
        <label htmlFor="tipoAmputacion" className="form-label">
          tipo de Amputaciones klk
        </label>
        <select id="tipoAmputacion" className="form-select">
          <option value="">Seleccione una opcion</option>
          {amputaciones.map((amputacion, index) => (
            <option key={index} value={amputacion.descripcion}>
              {amputacion.descripcion}
            </option>
          ))}
        </select> 
    </>
  );
};
export default TipoAmputacion;

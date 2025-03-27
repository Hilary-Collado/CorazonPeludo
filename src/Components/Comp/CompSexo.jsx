import React, { useState, useEffect } from "react";
import "../../App.css";
import axios from "axios";

const CompSexo = ({tipo}) => {
  const [sexos, setSexos] = useState([]);

  useEffect(() => {
    const fetchDataSexo = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/genero");
        setSexos(response.data);
        console.log("API response en sexo: ", response.data);
      } catch (error) {
        console.error("Error al obtener los datos tabla sexo:", error);
      }
    };
    fetchDataSexo();
  }, []);

  const opcionesFiltradas = sexos.filter((sexo) =>
    tipo === "persona"
      ? sexo.descripcion === "Hombre" || sexo.descripcion === "Mujer"
      : sexo.descripcion === "Macho" || sexo.descripcion === "Hembra"
  );

  return (
    <>
      <label htmlFor="sexo" className="form-label">
        Sexo
      </label>
      <select className="form-select" id="sexo">
        <option value="">Seleccione un sexo</option>
        {opcionesFiltradas.map((sexo, index) => (
          <option key={index} value={sexo.descripcion}>
            {sexo.descripcion}
          </option>
        ))}
      </select>
    </>
  );
};
export default CompSexo;

import React, { useState, useEffect } from "react";
import "../../App.css";
import axios from "axios";

const CompSexo = ({tipo, onChange}) => {
  const [sexos, setSexos] = useState([]);

  useEffect(() => {
    const fetchDataSexo = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/genero");
        setSexos(response.data);
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

  const handleSelectChange = (e) => {
    const selectedId = parseInt(e.target.value);
    console.log("🔍 ID seleccionado (sexo):", selectedId); // 👈 Agrega esto
    onChange(selectedId); // Enviamos el id al componente padre
  }; 

  return (
    <>
      <label htmlFor="sexo" className="form-label">
        Sexo
      </label>
      <select className="form-select" id="sexo" onChange={handleSelectChange}>
        <option value="">Seleccione una opcion</option>
        {opcionesFiltradas.map((sexo) => (
          <option key={sexo.idSexo} value={sexo.idSexo}>
            {sexo.descripcion}
          </option>
        ))}
      </select>
    </>
  );
};
export default CompSexo;

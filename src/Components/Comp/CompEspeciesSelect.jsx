import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../App.css";

const EspeciesSelect = ({ onChange }) => {
  const [especies, setEspecies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/especie");
        setEspecies(response.data);
      } catch (error) {
        console.error(
          "Error al obtener los datos tabla EspeciesSelect:",
          error
        );
      }
    };
    fetchData();
  }, []);

  const handleSelectChange = (e) => {
    const selectedId = parseInt(e.target.value);
    onChange(selectedId); // Enviamos el id al componente padre
  };

  return (
    <>
      <label htmlFor="" className="form-label">
        Especie
      </label>  
      <select
        className="form-select"
        onChange={handleSelectChange}
        id="especie"
      >
        <option value="" disabled selected>
          Selecciona Una Opcion...
        </option>
        {especies.map((item) => (
          <option key={item.idEspecie} value={item.idEspecie}>
            {item.descripcion}
          </option>
        ))}
      </select>
    </>
  );
};
export default EspeciesSelect;

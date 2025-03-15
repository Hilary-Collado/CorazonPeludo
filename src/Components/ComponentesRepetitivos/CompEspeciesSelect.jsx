import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../App.css";

const EspeciesSelect = () => {
  const [especies, setEspecies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/especie");
        setEspecies(response.data);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>

      <div className="especie">
        <label
          htmlFor=""
          className="form-label"
        >
          Especie
        </label>
        <select className="form-select">
          <option value="">Seleccione una especie</option>
          {especies.map((especie, index) => (
            <option key={index} value={especie.descripcion}>
              {especie.descripcion}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};
export default EspeciesSelect;

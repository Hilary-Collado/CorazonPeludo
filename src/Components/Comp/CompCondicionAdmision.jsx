import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../App.css";

const CondicionAdmision = ({ onChange }) => {
  const [condicionAdmision, setCondicionAdmision] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/condicionAdmision"
        );
        setCondicionAdmision(response.data);
      } catch (error) {
        console.error(
          "Error al obtener los datos tabla CondicionAdmision:",
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
      <label htmlFor="condicionAdmision" className="form-label">
        Condición de Admision
      </label>
      <select
        className="form-select"
        onChange={handleSelectChange}
        id="condicionAdmision"
      >
        <option value="" disabled selected>
          Selecciona Una Opcion...
        </option>
        {condicionAdmision.map((item) => (
          <option
            key={item.idCondicionAdmision}
            value={item.idCondicionAdmision}
          >
            {item.descripcion}
          </option>
        ))}
      </select>
    </>
  );
};
export default CondicionAdmision;

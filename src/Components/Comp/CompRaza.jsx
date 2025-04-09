import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../App.css";

const Raza = ({ onChange }) => {
  const [raza, setRaza] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/raza");
        setRaza(response.data);
      } catch (error) {
        console.error("Error al obtener los datos tabla raza:", error);
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
      <label htmlFor="raza" className="form-label">
        Raza
      </label>
      <select className="form-select" onChange={handleSelectChange} id="raza">
        <option value="" disabled selected>
          Selecciona Una Opcion...
        </option>
        {raza.map((item) => (
          <option key={item.idRaza} value={item.idRaza}>
            {item.descripcion}
          </option>
        ))}
      </select>
    </>
  );
};
export default Raza;

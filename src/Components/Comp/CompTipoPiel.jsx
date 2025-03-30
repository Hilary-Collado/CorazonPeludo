import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../App.css";

const TipoPiel = ({ onChange }) => {
  const [tipoPiel, setTipoPiel] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/tipoPiel");
        setTipoPiel(response.data);
      } catch (error) {
        console.error("Error al obtener los datos tabla tipoPiel:", error);
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
        <label
          htmlFor=""
          className="form-label capp"
        >
          Tipo de Piel
        </label>
        <select className="form-select" id="tipoPiel" onChange={handleSelectChange}>
          <option value="">Seleccione un tipo de piel</option>
          {tipoPiel.map((item) => (
            <option key={item.idTipoPiel} value={item.idTipoPiel}>
              {item.descripcion}
            </option>
          ))}
        </select>
    </>
  );
};
export default TipoPiel;

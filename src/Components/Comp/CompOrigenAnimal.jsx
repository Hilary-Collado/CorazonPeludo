import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../App.css";

const CompOrigenAnimal = ({ onChange }) => {
    const [origen, setOrigen] = useState([]);

    
  useEffect(() => {
    const fetchOrigenAnimal = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/OrigenAnimal");
        setOrigen(response.data);
      } catch (error) {
        console.error("Error al obtener los datos tabla OrigenAnimal:", error);
      }
    };
    fetchOrigenAnimal();
  }, []);

  const handleSelectChange = (e) => {
    const selectedId = parseInt(e.target.value);
    onChange(selectedId); // Enviamos el id al componente padre
  }; 
  
  return (
    <>
      <label for="origen" className="capp form-label">
        Origen Del Animal
      </label>
      <select id="origen" className="form-select" onChange={handleSelectChange}>
        <option value="" disabled selected>
          Selecciona Una Opcion...
        </option>
        {origen.map((item) => (
          <option key={item.idOrigenAnimal} value={item.idOrigenAnimal}>
            {item.descripcion}
          </option>
        ))}
      </select>
    </>
  );
};
export default CompOrigenAnimal;

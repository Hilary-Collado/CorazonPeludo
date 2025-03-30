import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../App.css";

const EstadoSalud = ({ onChange }) => {
  const [estadoSalud, setEstadoSalud] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/estadoSalud");
        setEstadoSalud(response.data);
      } catch (error) {
        console.error("Error al obtener los datos tabla EstadoSalud:", error);
      }
    };
    fetchData();
  }, []);

  const handleSelectChange = (e) => {
    const selectedId = parseInt(e.target.value);
    onChange(selectedId); // Enviamos el id al componente padre
    // onChange(selectedId); // Enviamos el id al componente padre
  }; 
  
  return (
    <>

      <div className="estadoSalud">
        <label
          htmlFor=""
          className="form-label"
        >
          Estado de Salud del Animal
        </label>
        <select className="form-select" id="estadoSalud" onChange={handleSelectChange}>
          <option value="">Seleccione una opcion</option>
          {estadoSalud.map((item) => (
            <option key={item.idEstadoSalud} value={item.idEstadoSalud}>
              {item.descripcion}
            </option> 
          ))}
        </select>
      </div>
    </>
  );
};
export default EstadoSalud;

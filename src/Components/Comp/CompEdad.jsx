import React, { useEffect, useState } from "react";
import axios from "axios";

const CompEdad = ({ formData, setFormData }) => {
  const [tiposEdad, setTiposEdad] = useState([]);

  useEffect(() => {
    const fetchTiposEdad = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/tipo-edad");
        setTiposEdad(response.data);
      } catch (error) {
        console.error("Error al obtener los tipos de edad:", error);
      }
    };
    fetchTiposEdad();
  }, []);

  return (
    <div className="col-md-6">
      <label htmlFor="edad" className="form-label">Edad</label>
      <div className="d-flex gap-2">
        <input
          type="number"
          className="form-control"
          id="edad_ingreso"
          min={0}
          value={formData.edad_ingreso}
          onChange={(e) =>
            setFormData({ ...formData, edad_ingreso: e.target.value })
          }
        />
        <select
          className="form-select"
          value={formData.idTipoEdad || ""}
          onChange={(e) =>
            setFormData({ ...formData, idTipoEdad: parseInt(e.target.value) })
          }
        >
          <option value="">Unidad</option>
          {tiposEdad.map((tipo) => (
            <option key={tipo.idTipoEdad} value={tipo.idTipoEdad}>
              {tipo.descripcion}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CompEdad;

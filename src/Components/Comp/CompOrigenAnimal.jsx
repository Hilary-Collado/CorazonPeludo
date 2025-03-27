import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../App.css";

const CompOrigenAnimal = () => {
    const [especies, setEspecies] = useState([]);
  
  return (
    <>
      <label for="origen" className="form-label">
        Origen Del Animal
      </label>
      <select id="origen" className="form-select">
        <option value="" disabled selected>
          Selecciona Una Opcion...
        </option>
        {especies.map((especie, index) => (
          <option key={index} value={especie.descripcion}>
            {especie.descripcion}
          </option>
        ))}
      </select>
    </>
  );
};
export default CompOrigenAnimal;

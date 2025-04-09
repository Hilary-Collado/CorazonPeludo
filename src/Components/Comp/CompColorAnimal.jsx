import React, { useState, useEffect } from "react";
import axios from "axios";

const CompColorAnimal = ({ onChangeFisico, onChangeOjos }) => {
  const [colores, setColores] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/colores")
      .then((res) => {
        // console.log("🎨 Colores recibidos:", res.data);
        setColores(res.data)})
      .catch((err) => console.error("Error al cargar colores:", err));
  }, []);


  // const handleSelectChange = (e) => {
  //   const selectedId = parseInt(e.target.value);
  //   // console.log("🔍 ID seleccionado (sexo):", selectedId); // 👈 Agrega esto
  //   onChange(selectedId); // Enviamos el id al componente padre
  // }; 

  return (
    <>
      <div className="row  mb-3">
        <div className="col-md-6 mb-3">
          <label htmlFor="tipoAmputacion" className="capp form-label">
            Color físico:
          </label>
          <select
            className="form-select"
            id="idColorFisico"
            onChange={(e) => onChangeFisico(parseInt(e.target.value))}
          >
            <option value="" disabled selected>
              Selecciona Una Opcion...
            </option>
            {colores.map((color) => (
              <option key={color.idColor} value={color.idColor}>
                {color.descripcion}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="tipoAmputacion" className="form-label">
            Color de ojos:
          </label>
          <select
            className="form-select"
            id="idColorOjos"
            onChange={(e) => onChangeOjos(parseInt(e.target.value))}
          >
            <option value="" disabled selected>
              Selecciona Una Opcion...
            </option>
            {colores.map((color) => (
              <option key={color.idColor} value={color.idColor}>
                {color.descripcion}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default CompColorAnimal;

// <label htmlFor="tipoAmputacion" className="capp form-label">
//         tipo de Amputaciones
//       </label>
//       <select
//         id="tipoAmputacion"
//         className="form-select"
//         disabled={disabled}
//         onChange={handleSelectChange}
//         value={value}
//       >
//         <option value="" disabled selected>
//           Selecciona Una Opcion...
//         </option>
//         {amputaciones.map((item) => (
//           <option key={item.idTipoAmputaciones} value={item.idTipoAmputaciones}>
//             {item.descripcion}
//           </option>
//         ))}
//       </select>

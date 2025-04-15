import React, { useEffect, useState } from "react";
import axios from "axios";

const CriteriosMatchCard = ({ idPersona }) => {
  const [criterios, setCriterios] = useState([]);
  const [nombre, setNombre] = useState("");
  const [extras, setExtras] = useState({}); 

  useEffect(() => {
    const fetchCriterios = async () => {
      try {
        if (!idPersona) return; 

        const res = await axios.get(
          `http://localhost:8000/api/criterios-match/${idPersona}`
        );

        const criteriosFormateados = res.data.criterios.map((c) => ({
          nombre: c.nombre,
          valor: typeof c.valor === "number" ? c.valor : null,
        }));
        setCriterios(criteriosFormateados);
        setNombre(res.data.nombreCompleto);
        setExtras(res.data.extras || {});
      } catch (err) {
        console.error("❌ Error al obtener criterios:", err);
      }
    };

    fetchCriterios();
  }, [idPersona]);

  return (
    <div className="bg-white p-4 rounded-xl border">

      <h3 className="text-lg font-bold text-center mb-2">
        <strong>{nombre}</strong> ¿Por qué se te recomendaron estos animales?
      </h3>

      <ul role="list" className="divide-y divide-gray-200">
          {criterios.map((c, index) => (
            <li className="flex justify-between gap-x-6 py-3" key={index}>{c.nombre}  <strong>{c.valor !== null ? c.valor.toFixed(1) : "N/A"} / 10</strong></li> 
          ))}
        </ul>

        {Object.keys(extras).length > 0 && (
        <div className="mt-3 text-gray-700 ">
          <h6 className="font-semibold mb-1 text-center">Información adicional:</h6>
          <ul className="divide-y divide-gray-200">
            {Object.entries(extras).map(([key, value], index) => (
              <li className="flex justify-between gap-x-6 py-3" key={index}>{key}: <strong>{value}</strong></li>
            ))}
          </ul>
        </div>
      )}      
    </div>
  );
};

export default CriteriosMatchCard;

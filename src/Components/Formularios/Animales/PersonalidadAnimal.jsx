import React, { useEffect, useState } from "react";
import axios from "axios";

const PersonalidadAnimal = ({ idAnimal, compatibilidad }) => {
  const [caracteristicas, setCaracteristicas] = useState([]);
  const [etiquetas, setEtiquetas] = useState([]);

  useEffect(() => {
    const fetchPersonalidad = async () => {
      try {
        const [resCaract, resEtiq] = await Promise.all([
          axios.get(
            `http://localhost:8000/api/animal-caracteristicas/${idAnimal}`
          ),
          axios.get(`http://localhost:8000/api/animal-etiquetas/${idAnimal}`),
        ]);

        setCaracteristicas(resCaract.data);
        setEtiquetas(resEtiq.data);
      } catch (error) {
        console.error("❌ Error al cargar personalidad del animal:", error);
      }
    };

    if (idAnimal) {
      fetchPersonalidad();
    }
  }, [idAnimal]);

  return (
    <div className="mt-1 ">
      <h3 className="text-lg font-semibold mb-2">Personalidad</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="mb-4">
          {/* <h4 className="font-medium">Características:</h4> */}
          <strong>Características:</strong>
          {caracteristicas.length > 0 ? (
            <ul className="list-disc pl-5">
              {caracteristicas.map((c) => (
                <li key={c.id_caracteristica}>
                  {c.nombre}: {c.valor}/10
                </li>
              ))}
            </ul>
          ) : (
            <p>No se registraron características.</p>
          )}
        </div>
        <div>
          <div>
            {/* <h4 className="font-medium">Etiquetas:</h4> */}
            <strong>Etiquetas:</strong>
            {etiquetas.length > 0 ? (
              <ul className="flex flex-wrap gap-2 mt-2">
                {etiquetas.map((e) => (
                  <span
                    key={e.id_etiqueta}
                    className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                  >
                    {e.descripcion}
                  </span>
                ))}
              </ul>
            ) : (
              <p>No se registraron etiquetas.</p>
            )}
          </div>
          <br />
          <p
            className={`inline-block mt-3 p-2 rounded-full text-sm font-semibold ${
              compatibilidad >= 80
                ? "bg-green-100 text-green-800"
                : compatibilidad >= 50
                ? "bg-yellow-100 text-yellow-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            <strong>Compatibilidad:</strong>{" "}
            {compatibilidad !== undefined
              ? `${compatibilidad}%`
              : "No disponible"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PersonalidadAnimal;

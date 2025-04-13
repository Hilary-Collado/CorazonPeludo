import React, { useEffect, useState } from "react";

const AnimalDataTable = () => {
  const [animales, setAnimales] = useState([]);
  const [columnas, setColumnas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/api/animales-detalle")
      .then((res) => res.json())
      .then((data) => {
        setAnimales(data);
        if (data.length > 0) {
          setColumnas(Object.keys(data[0]));
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error al obtener datos:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center p-4">Cargando datos...</div>;

  return (
    
    <div className="overflow-x-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Listado de Animales</h2>
      hola mundo
      <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
        <thead className="bg-gray-100">
          <tr>
            {columnas.map((col, i) => (
              <th key={i} className="text-sm px-4 py-2 border-b border-gray-300 text-left">
                {col.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {animales.map((animal, idx) => (
            <tr key={idx} className="hover:bg-gray-50">
              {columnas.map((col, i) => (
                <td key={i} className="text-sm px-4 py-2 border-b border-gray-200">
                  {animal[col] !== null ? animal[col].toString() : "-"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


export default AnimalDataTable;
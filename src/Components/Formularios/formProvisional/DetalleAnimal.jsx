import React from 'react';

const DetalleAnimal = ({ animal, volver }) => {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <button onClick={volver} className="text-blue-600 mb-4 underline">
        ← Volver a la lista
      </button>

      <div className="border rounded-xl shadow-md overflow-hidden">
        <img src={animal.imagen} alt={animal.nombre} className="w-full h-72 object-cover" />
        <div className="p-6">
          <h2 className="text-2xl font-bold">{animal.nombre}</h2>
          <p className="text-gray-700">{animal.descripcion}</p>
          <p className="text-green-600 mt-2 font-semibold">
            Compatibilidad: {animal.compatibilidad}%
          </p>

          <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded">
            Solicitar adopción
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetalleAnimal;

import React, { useState, useEffect } from "react";
import { animales } from "./mockData";
import DetalleAnimal from "./DetalleAnimal";
import axios from "axios";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import { useForm } from "react-hook-form";
import HeaderAdmin from "../../Menu/Header/HeaderAdmin/HeaderAdmin";
import Aside from "../../Menu/Aside/Aside";
import PageTitle from "../../ComponentesRepetitivos/PageTitle";

const PantallaEmparejamientos = ({ idPersona }) => {
  // const [seleccionado, setSeleccionado] = useState(null);
  const [animales, setAnimales] = useState([]);
  const [animalSeleccionado, setAnimalSeleccionado] = useState(null);
  const [mostrarModal, setMostrarModal] = useState(false);

  const [registroAdoptante, setRegistroAdoptante] = useState({
    title: "Sugerencias de adopcion",
  });
  const { title } = registroAdoptante;

  useEffect(() => {
    const fetchAnimales = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8000/api/match/${idPersona}`
        );
        setAnimales(res.data);
      } catch (error) {
        console.error("❌ Error al obtener animales:", error);
      }
    };

    if (idPersona) fetchAnimales();
  }, [idPersona]);


  // if (seleccionado) {
  //   return (
  //     <DetalleAnimal
  //       animal={seleccionado}
  //       volver={() => setSeleccionado(null)}
  //     />
  //   );
  // }

  const abrirModal = (animal) => {
    setAnimalSeleccionado(animal);
    const modal = new bootstrap.Modal(document.getElementById("modalAnimal"));
    modal.show();
  };

  const cerrarModal = () => {
    setAnimalSeleccionado(null);
    setMostrarModal(false);
  };
  return (
    <>
     <div className="mt-4">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Animales compatibles contigo
        </h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {animales.map((animal) => (
            <div
              key={animal.idIngAnimales}
              className="border rounded-xl shadow-md overflow-hidden"
            >
              <div className="p-4">
                <h2 className="text-xl font-semibold">{animal.nombre}</h2>
                <p className="text-gray-600">
                  {animal.descripcion || "Sin descripción disponible"}
                </p>
                <p className="mt-2 text-green-600 font-semibold">
                  Compatibilidad: {Math.round(animal.porcentaje_compatibilidad)}%
                </p>
                <button
                  onClick={() => setAnimalSeleccionado(animal)}
                  className="mt-3 bg-blue-600 text-white px-4 py-2 rounded w-full"
                >
                  Ver Detalles
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* MODAL */}
        {animalSeleccionado && (
          <DetalleAnimal
            animal={animalSeleccionado}
            cerrar={() => setAnimalSeleccionado(null)}
          />
        )}
      </div>
      
    </>
  );
  
};

export default PantallaEmparejamientos;

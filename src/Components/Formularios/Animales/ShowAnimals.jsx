import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ButtonEmparejamiento from "../../Buttons/ButtonEmparejamiento";
import PersonalidadAnimal from "../Animales/PersonalidadAnimal";

import DetalleAnimal from "../formProvisional/DetalleAnimal";
import Close from "../../Buttons/Close";

const ShowAnimals = () => {
  const [animales, setAnimales] = useState([]);
  const [animalSeleccionado, setAnimalSeleccionado] = useState(null);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [dashboard, setDashboard] = useState({
    title: "Animales Disponibles para adopción",
    mensaje: "Hola,",
    final: "¿Listo/a adoptar?",
  });
  const { title, mensaje } = dashboard;

  useEffect(() => {
    const fetchAnimales = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8000/api/animales-detalle`
        );
        setAnimales(res.data);
      } catch (error) {
        console.error("❌ Error al obtener animales:", error);
      }
    };
    fetchAnimales();
    // if (idPersona) fetchAnimales();
  }, []);

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
      <div className="card-body">
        <div className="flex justify-between pb-4">
          <h3 className="card-title">{title}</h3>
          <ButtonEmparejamiento />
        </div>
        {/*onClick={handleLogin}*/}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {animales.map((animal) => (
            <div
              key={animal.idIngAnimales}
              className="border rounded-xl shadow-md overflow-hidden"
            >
              {/* Imagen de animal (espacio reservado) */}
              <div className="h-40 bg-gray-200 flex items-center justify-center text-gray-500">
                Imagen aquí
              </div>

              <div className="p-4">
                <h2 className="text-xl font-semibold">{animal.nombre}</h2>
                <p className="text-gray-600">
                  {animal.edad_ingreso} {animal.tipoEdad}
                </p>
                <div className="text-gray-600">Genero: {animal.sexo}</div>
                {/* <p className="mt-2 text-green-600 font-semibold">
                  Compatibilidad: {Math.round(animal.porcentaje_compatibilidad)}%
                </p> */}
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

        {/* Modal de detalles */}
        {animalSeleccionado && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-xl w-full max-w-3xl overflow-y-auto max-h-[90vh] shadow-lg">
              <div className="justify-between items-center pb-4 flex text-center">
                <button
                  className=" bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                  onClick={() => setAnimalSeleccionado(null)}
                >
                  Cerrar
                </button>

                <h2 className="text-2xl font-bold">
                  {animalSeleccionado.nombre}
                </h2>
              </div>

              {/* Imagen */}
              <div className="h-48 bg-gray-200 mb-4 flex items-center justify-center text-gray-500">
                Imagen del animal aquí
              </div>

              <h3 className="text-lg font-semibold mb-2">Datos Generales</h3>
            
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <p>
                  <strong>Edad:</strong> {animalSeleccionado.edad_ingreso}{" "}
                  {animalSeleccionado.tipoEdad}
                </p>
                <p>
                  <strong>Sexo:</strong> {animalSeleccionado.sexo}
                </p>
                <p>
                  <strong>Especie:</strong> {animalSeleccionado.especie}
                </p>
                <p>
                  <strong>Raza:</strong> {animalSeleccionado.raza}
                </p>
                <p>
                  <strong>Peso:</strong> {animalSeleccionado.peso_ingreso} kg
                </p>
                <p>
                  <strong>Altura:</strong> {animalSeleccionado.altura_ingreso} m
                </p>
                <p>
                  <strong>Tipo de piel:</strong> {animalSeleccionado.tipoPiel}
                </p>
                <p>
                  <strong>Color físico:</strong>{" "}
                  {animalSeleccionado.colorFisico}
                </p>
                <p>
                  <strong>Color de ojos:</strong> {animalSeleccionado.colorOjos}
                </p>
                <p>
                  <strong>Amputaciones:</strong>{" "}
                  {animalSeleccionado.tieneAmputaciones}
                </p>
                <p>
                  <strong>Tipo de amputación:</strong>{" "}
                  {animalSeleccionado.tipoAmputacion}
                </p>
                <p>
                  <strong>Condición de admisión:</strong>{" "}
                  {animalSeleccionado.condicionAdmision}
                </p>
                <p>
                  <strong>Origen:</strong> {animalSeleccionado.origen}
                </p>
                <p>
                  <strong>Refugio:</strong> {animalSeleccionado.refugio}
                </p>
                <p>
                  <strong>Dirección del refugio:</strong>{" "}
                  {animalSeleccionado.direccionRefugio}
                </p>
                <p>
                  <strong>Ciudad:</strong> {animalSeleccionado.ciudadRefugio}
                </p>
                <p>
                  <strong>País:</strong> {animalSeleccionado.paisRefugio}
                </p>
              </div>
              <hr class=" h-0.5 border-t-0 bg-gray-600" />
              {/* <hr class="my-12 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" /> */}

              <PersonalidadAnimal idAnimal={animalSeleccionado.idIngAnimales} />
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default ShowAnimals;

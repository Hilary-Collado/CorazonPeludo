import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import PersonalidadAnimal from "../Animales/PersonalidadAnimal";

const PantallaEmparejamientos = ({ idPersona }) => {
  const [animales, setAnimales] = useState([]);
  const [animalSeleccionado, setAnimalSeleccionado] = useState(null);
  const [imagenes, setImagenes] = useState({});

  const [registroAdoptante, setRegistroAdoptante] = useState({
    title: "Sugerencias de adopcion",
    sub_title: "Animales compatibles contigo",
  });
  const { title, sub_title } = registroAdoptante;

  useEffect(() => {
    const fetchAnimales = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8000/api/match/${idPersona}`
        );
        setAnimales(res.data);

        const animalesData = res.data;

        const imagenesObj = {};
        await Promise.all(
          animalesData.map(async (a) => {
            try {
              const resImg = await axios.get(
                `http://localhost:8000/api/imagen-animal/${a.nombre}`
              );
              imagenesObj[a.idIngAnimales] = resImg.data.dataUrl;
            } catch {
              imagenesObj[a.idIngAnimales] = null;
            }
          })
        );
        setImagenes(imagenesObj);
      } catch (error) {
        console.error("❌ Error al obtener animales:", error);
      }
    };

    if (idPersona) fetchAnimales();
  }, [idPersona]);


  const handleMessage = (e) => {
    Swal.fire({
      title: "Solicitud enviada con exito!",
      text: "Nos pondremos en contacto contigo pronto.",
      icon: "success",
      draggable: true,
      position: "center",
      timer: 1800,
    });
  };

  return (
    <>
      <div className="mt-4">
        <h1 className="text-2xl font-bold mb-4 text-center">{sub_title}</h1>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {animales.map((animal) => (
            <div
              key={animal.idIngAnimales}
              className="border rounded-xl shadow-md overflow-hidden"
            >
              
              {imagenes[animal.idIngAnimales] ? (
                <img
                  src={imagenes[animal.idIngAnimales]}
                  alt={animal.nombre}
                  className="h-40 w-full object-cover object-center"
                />
              ) : (
                <div className="h-40 bg-gray-200 flex items-center justify-center text-gray-500">
                  Sin imagen
                </div>
              )}

              <div className="p-4">
                <h2 className="text-xl font-semibold">
                  <strong>{animal.nombre}</strong>
                </h2>
                <p className="text-gray-600">
                  <strong>Edad:</strong> {animal.edad_ingreso} {animal.tipoEdad}
                </p>
                <div className="text-gray-600">
                  <strong>Genero:</strong> {animal.sexo}
                </div>
                
                <p
                  className={`inline-block mt-3 p-2 rounded-full text-sm font-semibold ${
                    animal.porcentaje_compatibilidad >= 80
                      ? "bg-green-100 text-green-800"
                      : animal.porcentaje_compatibilidad >= 50
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  <strong>Compatibilidad:</strong>{" "}
                  {animal.porcentaje_compatibilidad != null
                    ? `${Math.round(animal.porcentaje_compatibilidad)}%`
                    : "No disponible"}
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

        {/* Modal de detalles */}
        {animalSeleccionado && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center mt-10">
            <div className="bg-white p-6 rounded-xl w-full max-w-3xl overflow-y-auto max-h-[90vh] shadow-lg mt-10">
              <div className="justify-between items-center pb-4 flex text-center">
                <h2 className="text-2xl font-bold">
                  {animalSeleccionado.nombre}
                </h2>
                <button
                  className=" bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                  onClick={() => setAnimalSeleccionado(null)}
                >
                  Cerrar
                </button>
              </div>

              <div className="h-64 w-full bg-gray-200 flex items-center justify-center overflow-hidden rounded-md mb-4">
                
                {imagenes[animalSeleccionado.idIngAnimales] ? (
                  <img
                    src={imagenes[animalSeleccionado.idIngAnimales]}
                    alt={animalSeleccionado.nombre}
                    className="h-full object-contain"
                  />
                ) : (
                  <div className="h-40 bg-gray-200 flex items-center justify-center text-gray-500">
                    Sin imagen
                  </div>
                )}
              </div>


              <h3 className="text-lg font-semibold mb-3">Datos Generales</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
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
              <PersonalidadAnimal
                idAnimal={animalSeleccionado.idIngAnimales}
                compatibilidad={Math.round(
                  animalSeleccionado.porcentaje_compatibilidad
                )}
              />

              <div className="flex justify-between">
                <button
                  className=" bg-green-800 text-white px-4 py-2 rounded hover:bg-green-900"
                  onClick={handleMessage}
                >
                  Quiero Adoptar
                </button>

                <button
                  className=" bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                  onClick={() => setAnimalSeleccionado(null)}
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PantallaEmparejamientos;

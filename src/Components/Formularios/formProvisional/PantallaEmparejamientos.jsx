import React, { useState } from "react";
import { animales } from "./mockData";
import DetalleAnimal from "./DetalleAnimal";

import { useForm } from "react-hook-form";
import HeaderAdmin from "../../Menu/Header/HeaderAdmin/HeaderAdmin";
import Aside from "../../Menu/Aside/Aside";
import PageTitle from "../../ComponentesRepetitivos/PageTitle";

const PantallaEmparejamientos = () => {
  const [seleccionado, setSeleccionado] = useState(null);

  const [registroAdoptante, setRegistroAdoptante] = useState({
    title: "Sugerencias de adopcion",
  });
  const { title } = registroAdoptante;

  if (seleccionado) {
    return (
      <DetalleAnimal
        animal={seleccionado}
        volver={() => setSeleccionado(null)}
      />
    );
  }

  return (
    <>
      <HeaderAdmin />
      <Aside />
      <main id="main" className="main text-transform: capitalize">
        <PageTitle titulo={registroAdoptante} />
        <section className="section">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body ">
                  {/* <h5 class="card-title titulo">{title}</h5>  */}
                  <div className="mt-4">
                    <h1 className="text-2xl font-bold mb-4 text-center">
                      Animales compatibles contigo
                    </h1>
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {animales.map((animal) => (
                        <div
                          key={animal.id}
                          className="border rounded-xl shadow-md overflow-hidden"
                        >
                          <img
                            src={animal.imagen}
                            alt={animal.nombre}
                            className="w-full h-64 object-cover"
                          />
                          <div className="p-4">
                            <h2 className="text-xl font-semibold">
                              {animal.nombre}
                            </h2>
                            <p className="text-gray-600">
                              {animal.descripcion}
                            </p>
                            <p className="mt-2 text-green-600 font-semibold">
                              Compatibilidad: {animal.compatibilidad}%
                            </p>
                            <button
                              onClick={() => setSeleccionado(animal)}
                              className="mt-3 bg-blue-600 text-white px-4 py-2 rounded"
                            >
                              Ver Detalles
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default PantallaEmparejamientos;

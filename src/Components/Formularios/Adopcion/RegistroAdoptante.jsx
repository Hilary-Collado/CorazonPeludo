import React, { useState } from "react";
import { useForm } from "react-hook-form";
import HeaderAdmin from "../../Menu/Header/HeaderAdmin/HeaderAdmin";
import Aside from "../../Menu/Aside/Aside";
import PageTitle from "../../ComponentesRepetitivos/PageTitle";

import Save from "../../Buttons/Save";
import Clear from "../../Buttons/Clear";
import Cancel from "../../Buttons/Cancel";
import ButtonTestPersonalidad from "../../Buttons/ButtonTestPersonalidad";

import TestPersonalidadForm from "./TestPersonalidad";
import ModalSimple from "./ModalSimple";

const RegistroAdoptante = () => {
  const [registroAdoptante, setRegistroAdoptante] = useState({
    title: "Registro de Adoptante",
  });
  const { title } = registroAdoptante;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Datos del adoptante:", data);
    // Aquí puedes hacer un POST con axios al backend
  };

  const [showTestModal, setShowTestModal] = useState(false);
  const [testData, setTestData] = useState(null);

  const abrirModal = () => setShowTestModal(true);
  const cerrarModal = () => setShowTestModal(false);

  const guardarRespuestasTest = (data) => {
    setTestData(data);
    cerrarModal();
    console.log("✅ Respuestas del test:", data);
    // Puedes guardar esto junto con el formulario general si quieres
  };

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
                <div className="card-body">
                  <h5 class="card-title titulo">{title}</h5>

                  <form onSubmit={handleSubmit(onSubmit)} className="">
                    <div className="infoPersonal">
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <h2 className="text-xl font-bold mb-3">
                            Información Personal
                          </h2>
                        </div>
                        <div className="col-md-6 mb-3 text-end">
                          <ButtonTestPersonalidad onClick={abrirModal} />
                        </div>
                      </div>

                      {/* Modal */}
                      {/* <ModalSimple isOpen={showTestModal} onClose={cerrarModal}>
                        <TestPersonalidadForm
                          onSubmitTest={guardarRespuestasTest}
                        />
                      </ModalSimple> */}
                      {/* -- */}

                      <ModalSimple isOpen={showTestModal} onClose={cerrarModal}>
                        <TestPersonalidadForm
                          onSubmitTest={guardarRespuestasTest}
                        />
                      </ModalSimple>

                      <div className="row ">
                        <div className="col-md-6 mb-3">
                          <label for="nombre" className="form-label">
                            nombre
                          </label>
                          <input
                            {...register("nombre", { required: true })}
                            placeholder="Nombre completo"
                            className="w-full p-2 border"
                          />
                          {errors.nombre && (
                            <p className="text-red-500">Nombre requerido</p>
                          )}
                        </div>

                        <div className="col-md-6 mb-3">
                          <label for="nombre" className="form-label">
                            Fecha de nacimiento
                          </label>
                          <input
                            type="date"
                            {...register("fechaNacimiento", { required: true })}
                            className="w-full p-2 border"
                          />
                          {errors.fechaNacimiento && (
                            <p className="text-red-500">Fecha requerida</p>
                          )}
                        </div>
                      </div>

                      <div className="row mb-3">
                        <div className="col-md-6 mb-3">
                          <label for="nombre" className="form-label">
                            Sexo
                          </label>
                          <select
                            {...register("sexo", { required: true })}
                            className="w-full p-2 border"
                          >
                            <option value="">Selecciona sexo</option>
                            <option value="masculino">Masculino</option>
                            <option value="femenino">Femenino</option>
                            <option value="otro">Otro</option>
                          </select>
                        </div>

                        <div className="col-md-6 mb-3">
                          <label for="nombre" className="form-label">
                            telefono
                          </label>
                          <input
                            {...register("telefono", { required: true })}
                            placeholder="Teléfono"
                            className="w-full p-2 border"
                          />
                        </div>
                      </div>

                      <div className="row mb-3">
                        <div className="col-md-6 mb-3">
                          <label for="nombre" className="form-label">
                            Direccion
                          </label>
                          <input
                            {...register("direccion", { required: true })}
                            placeholder="Dirección completa"
                            className="w-full p-2 border"
                          />
                        </div>
                        <div className="col-md-6 mb-3">
                          <label for="nombre" className="form-label">
                            ocupación
                          </label>
                          <input
                            {...register("ocupacion")}
                            placeholder="Ocupación"
                            className="w-full p-2 border"
                          />
                        </div>
                      </div>
                    </div>

                    {/* -- */}

                    <div className="sitHabitacional">
                      <h2 className="text-xl font-bold mb-3">
                        Situación Habitacional
                      </h2>

                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label for="nombre" className="form-label">
                            Tipo de vivienda
                          </label>
                          <select
                            {...register("tipoVivienda")}
                            className="w-full p-2 border"
                          >
                            <option value="">Tipo de vivienda</option>
                            <option value="casa">Casa</option>
                            <option value="departamento">Departamento</option>
                            <option value="otro">Otro</option>
                          </select>
                        </div>
                        <div className="col-md-6 mb-3">
                          <label for="nombre" className="form-label">
                            ¿Vivienda propia o rentada?
                          </label>
                          <select
                            {...register("propiaORentada")}
                            className="w-full p-2 border"
                          >
                            <option value="">
                              ¿Vivienda propia o rentada?
                            </option>
                            <option value="propia">Propia</option>
                            <option value="rentada">Rentada</option>
                          </select>
                        </div>
                      </div>

                      <div className="row mb-3">
                        <div className="col-md-6 mb-3">
                          <label for="nombre" className="form-label">
                            ¿Cuenta con patio?
                          </label>
                          <select
                            {...register("tienePatio")}
                            className="w-full p-2 border"
                          >
                            <option value="">¿Cuenta con patio?</option>
                            <option value="si">Sí</option>
                            <option value="no">No</option>
                          </select>
                        </div>
                        <div className="col-md-6 mb-3">
                          <label for="nombre" className="form-label">
                            Zona de residencia
                          </label>
                          <select
                            {...register("zona")}
                            className="w-full p-2 border"
                          >
                            <option value="">Zona de residencia</option>
                            <option value="urbana">Urbana</option>
                            <option value="rural">Rural</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* -- */}

                    <div className="compHogar">
                      <h2 className="text-xl font-bold mb-3 ">
                        Composición del Hogar
                      </h2>

                      <div className="row mb-3">
                        <div className="col-md-6 mb-3">
                          <label for="nombre" className="form-label">
                            ¿Cuántas personas viven contigo?
                          </label>
                          <input
                            type="number"
                            {...register("personasEnCasa")}
                            placeholder="¿Cuántas personas viven contigo?"
                            className="w-full p-2 border"
                          />
                        </div>
                        <div className="col-md-6 mb-3">
                          <label for="nombre" className="form-label">
                            ¿Hay niños en casa?
                          </label>
                          <select
                            {...register("hayNinos")}
                            className="w-full p-2 border"
                          >
                            <option value="">¿Hay niños en casa?</option>
                            <option value="si">Sí</option>
                            <option value="no">No</option>
                          </select>
                        </div>
                      </div>

                      <div className="row mb-3">
                        <div className="col-md-6 mb-3">
                          <label for="nombre" className="form-label">
                            ¿Hay adultos mayores?
                          </label>
                          <select
                            {...register("hayMayores")}
                            className="w-full p-2 border"
                          >
                            <option value="">¿Hay adultos mayores?</option>
                            <option value="si">Sí</option>
                            <option value="no">No</option>
                          </select>
                        </div>
                        <div className="col-md-6 mb-3">
                          <label for="nombre" className="form-label">
                            ¿Alguien tiene alergias a animales?
                          </label>
                          <select
                            {...register("alergias")}
                            className="w-full p-2 border"
                          >
                            <option value="">
                              ¿Alguien tiene alergias a animales?
                            </option>
                            <option value="si">Sí</option>
                            <option value="no">No</option>
                            <option value="ns">No sabe</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* -- */}

                    <div className="expeMascotas">
                      <h2 className="text-xl font-bold mb-3">
                        Experiencia con Mascotas
                      </h2>

                      <div className="row mb-3">
                        <div className="col-md-6 mb-3">
                          <label for="nombre" className="form-label">
                            ¿Tiene otras mascotas?
                          </label>
                          <select
                            {...register("otrasMascotas")}
                            className="w-full p-2 border"
                          >
                            <option value="">¿Tiene otras mascotas?</option>
                            <option value="si">Sí</option>
                            <option value="no">No</option>
                          </select>
                        </div>
                        <div className="col-md-6 mb-3">
                          <label for="nombre" className="form-label">
                            ¿Ha tenido mascotas antes?
                          </label>
                          <select
                            {...register("tuvoMascotas")}
                            className="w-full p-2 border"
                          >
                            <option value="">¿Ha tenido mascotas antes?</option>
                            <option value="si">Sí</option>
                            <option value="no">No</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* -- */}

                    <div className="estiloVida">
                      <h2 className="text-xl font-bold mb-3">Estilo de Vida</h2>

                      <div className="row mb-3">
                        <div className="col-md-6 mb-3">
                          <label for="nombre" className="form-label">
                            Horas fuera de casa por día
                          </label>
                          <select
                            {...register("horasFuera")}
                            className="w-full p-2 border"
                          >
                            <option value="">
                              Horas fuera de casa por día
                            </option>
                            <option value="menos4">Menos de 4</option>
                            <option value="4a8">4–8</option>
                            <option value="mas8">Más de 8</option>
                          </select>
                        </div>
                        <div className="col-md-6 mb-3">
                          <label for="nombre" className="form-label">
                            Nivel de actividad
                          </label>
                          <select
                            {...register("nivelActividad")}
                            className="w-full p-2 border"
                          >
                            <option value="">Nivel de actividad</option>
                            <option value="sedentario">Sedentario</option>
                            <option value="moderado">Moderado</option>
                            <option value="activo">Activo</option>
                          </select>
                        </div>
                      </div>

                      <div className="row mb-3">
                        <div className="col-md-6 mb-3">
                          <label for="nombre" className="form-label">
                            ¿Con qué frecuencia hace actividades al aire libre?
                          </label>
                          <select
                            {...register("actividadExterior")}
                            className="w-full p-2 border"
                          >
                            <option value="">
                              ¿Con qué frecuencia hace actividades al aire
                              libre?
                            </option>
                            <option value="nunca">Nunca</option>
                            <option value="ocasionalmente">
                              Ocasionalmente
                            </option>
                            <option value="frecuentemente">
                              Frecuentemente
                            </option>
                          </select>
                        </div>
                        <div className="col-md-6 mb-3">
                          <label for="nombre" className="form-label">
                            ¿Viaja frecuentemente?
                          </label>
                          <select
                            {...register("viajaFrecuente")}
                            className="w-full p-2 border"
                          >
                            <option value="">¿Viaja frecuentemente?</option>
                            <option value="si">Sí</option>
                            <option value="no">No</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    {/* -- */}

                    <div className="prefAdopcion">
                      <h2 className="text-xl font-bold">
                        Preferencias de Adopción
                      </h2>

                      <div className="row mb-3">
                        <div className="col-md-6 mb-3">
                          <label for="nombre" className="form-label">
                            ¿Por qué quieres adoptar?
                          </label>
                          <input
                            {...register("motivoAdopcion")}
                            placeholder="¿Por qué quieres adoptar?"
                            className="w-full p-2 border"
                          />
                        </div>
                        <div className="col-md-6 mb-3">
                          <label for="nombre" className="form-label">
                            Tipo de animal que quiere adoptar
                          </label>
                          <select
                            {...register("tipoAnimal")}
                            className="w-full p-2 border"
                          >
                            <option value="">Tipo de animal</option>
                            <option value="perro">Perro</option>
                            <option value="gato">Gato</option>
                            <option value="otro">Otro</option>
                          </select>
                        </div>
                      </div>

                      <div className="row mb-3">
                        <div className="col-md-6 mb-3">
                          <label for="nombre" className="form-label">
                            ¿preferencia del Tamaño del animal?
                          </label>
                          <select
                            {...register("tamanoPreferido")}
                            className="w-full p-2 border"
                          >
                            <option value="">Tamaño preferido</option>
                            <option value="pequeno">Pequeño</option>
                            <option value="mediano">Mediano</option>
                            <option value="grande">Grande</option>
                          </select>
                        </div>
                        <div className="col-md-6 mb-3"></div>
                      </div>
                    </div>

                    {/* -- */}

                    <div className="consentimiento">
                      <h2 className="text-xl font-bold </div>">
                        Consentimiento
                      </h2>

                      <div className="row mb-3">
                        <div className="col-md-6 mb-3">
                          <label className="block">
                            <input
                              type="checkbox"
                              {...register("aceptaPoliticas", {
                                required: true,
                              })}
                            />
                            <span className="ml-2">
                              Acepto que los datos se usen para sugerencias de
                              adopción.
                            </span>
                          </label>
                        </div>
                        <div className="col-md-6 mb-3">
                          <label className="block">
                            <input
                              type="checkbox"
                              {...register("compromiso", { required: true })}
                            />
                            <span className="ml-2">
                              Me comprometo a brindar un hogar responsable.
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>

                    {errors.aceptaPoliticas && (
                      <p className="text-red-500">
                        Debes aceptar esta condición.
                      </p>
                    )}
                    {errors.compromiso && (
                      <p className="text-red-500">
                        Debes aceptar esta condición.
                      </p>
                    )}

                    {/* <button
                      type="submit"
                      className="px-4 py-2 bg-blue-600 text-white rounded"
                    >
                      Enviar
                    </button> */}
                    <div className="text-center  mb-3">
                      <Save onClick={handleSubmit} />
                      <Clear />
                      <Cancel />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default RegistroAdoptante;

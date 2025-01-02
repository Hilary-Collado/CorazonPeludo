import React, { useState } from "react";
import Save from "../../Buttons/Save";
import Cancel from "../../Buttons/Cancel";
import Clear from "../../Buttons/Clear";
import '../../../App.css';
import '../../../App.scss';

import HeaderAdmin from "../../Menu/Header/HeaderAdmin/HeaderAdmin";
import Aside from "../../Menu/Aside/Aside";
import PageTitle from "../PageTitle";


{/* HAY QUE CAMBIAR ESTE FORMULARIO PORQUE SOLICITUD DE RESCATE ES PRINCIPALMENTE DEL CLIENTE, 
PERO TAMBIEN  PUEDE SER DE ADMIN PERO NO CONSIDERO QUE DEBE SER ASI*/}

const RegistroSolicitudRescate = () => {
  const [registroSolicitudRescate, setRegistroSolicitudRescate] = useState({
    title: "solicitud de rescate",
  })

  const { title } = registroSolicitudRescate

  return (
    <>
      <HeaderAdmin />
      <Aside />

      <main id="main" className="main">

        <PageTitle titulo={registroSolicitudRescate} />

        <section className="section">
          <div className="row">
            <div className="col-lg-12">

              <div className="card">
                <div className="card-body">
                  <h5 class="card-title titulo">{title}</h5>

                  {/* <!-- General Form Elements --> */}
                  <form class="needs-validation" id="form" novalidate>
                    <div class="row mb-3">
                      <div class="col-md-6 mb-3">
                        <label for="idSolicitante" class="form-label">ID Solicitud de Rescate</label>
                        <input type="text" class="form-control" id="idSolicitante" disabled />
                      </div>

                      {/* <div class="col-md-6">
            {/* <a href="../enums/registroEspecie.html">Crear nueva</a> */}
                      {/* <label for="especie" class="form-label">Especie</label> */}

                      {/* VOLVER ESTO UN ARRAY O TRAER DESDE LA DB */}
                      {/* <select id="especie" class="form-select"> */}
                      {/* <!-- <div class="data-display0"></div> --> */}
                      {/* <option value="" disabled selected>Selecciona Una Opcion...</option> 
              <option value="1">Perro</option>
              <option value="2">Gato</option>
              <option value="3">León</option>
              <option value="4">Elefante</option>
              <option value="5">Ballena</option>
              <option value="6">Tigre</option>
              <option value="7">Jirafa</option>
              <option value="8">Oso</option>
              <option value="9">Cebra</option>
              <option value="10">Hipopótamo</option>
              <option value="11">Pavo</option>
              <option value="12">Gallina</option>
              <option value="13">Reno</option>
            </select>
          </div>*/}


                      <div class="col-md-6">
                        {/* <a href="../enums/registroEspecie.html">Crear nueva</a> */}
                        <label for="especie" class="form-label">Especie</label>

                        {/* VOLVER ESTO UN ARRAY O TRAER DESDE LA DB */}
                        <select id="especie" class="form-select">
                          {/* <!-- <div class="data-display0"></div> --> */}
                          <option value="" disabled selected>Selecciona Una Opcion...</option>
                          {/* llamar opciones desde la db */}
                        </select>
                      </div>

                    </div>


                    <div class="row mb-3">
                      <div class="col-md-6 mb-3">
                        <label for="nombre" class="form-label">Nombre del Solicitante</label>
                        <input type="text" class="form-control" id="nombre" required />
                      </div>
                      <div class="col-md-6">
                        <label for="telefono" class="form-label">Telefono</label>
                        <input type="text" class="form-control" id="telefono" required />
                      </div>
                    </div>

                    <div class="row  mb-3">
                      <div class="col-md-6 mb-3">
                        <label for="colorFisico" class="form-label">Color Fisico Del Animal</label>
                        <input type="text" class="form-control" id="colorFisico"
                          placeholder="Ejemplo: Blanco con manchas negras" />
                      </div>
                      <div class="col-md-6">
                        <label for="tamanho" class="form-label">Tamaño</label>
                        <input type="text" class="form-control" id="tamanho" placeholder="Ejemplo: Grande, pequeño" />
                      </div>
                    </div>

                    <div class="row mb-3">
                      <div class="col-md-6 mb-3">
                        <label for="cedula" class="form-label">Cedula</label>
                        <input type="text" class="form-control" id="cedula" required />
                      </div>
                      <div class="col-md-6 mb-3">
                        <label for="mySelect" class="form-label">Sexo</label>
                        <select id="mySelect" class="form-select" required>

                        </select>
                      </div>
                    </div>

                    <div class="row mb-3">
                      <div class="col-md-6 mb-3">
                        <label for="ubicacion" class="form-label">Ubicacion</label>
                        <input type="text" class="form-control" id="ubicacion" required />
                      </div>
                      <div class="col-md-6">
                        <label for="ciudad" class="form-label">Ciudad</label>
                        <input type="text" class="form-control" id="ciudad" required />
                      </div>
                    </div>


                    <div class="row mb-3">
                      <div class="col-md-6 mb-3">
                        <label for="pais" class="form-label">Pais</label>
                        <input type="text" class="form-control" id="pais" required />
                      </div>
                      <div class="col-md-6">
                        <label for="comportamiento" class="form-label">Comportamiento</label>
                        <input type="text" class="form-control" id="comportamiento" required placeholder="asustado, agresivo" />
                      </div>
                    </div>

                    <div class="row mb-5">
                      <div class="col-md-6 mb-3">
                        <label for="status" class="form-label">Status</label>
                        <select id="status" class="form-select" required>
                          <option value="" disabled selected>Selecciona Una Opcion...</option>
                          <option value="1">Activo</option>
                          <option value="0">Inactivo</option>
                        </select>
                      </div>
                      <div class="col-md-6">
                        <label for="fechaModificacion" class="form-label">Fecha de Modificacion</label>
                        <input type="date" id="fechaModificacion" class="form-control" disabled />
                      </div>
                    </div>

                    <div className="text-center  mb-3">
                      <Save />
                      <Clear />
                      <Cancel />
                    </div>

                  </form >
                  {/* <!-- End General Form Elements --> */}
                </div>
              </div>

            </div>

          </div>
        </section>

      </main>
    </>
  )
}

export default RegistroSolicitudRescate
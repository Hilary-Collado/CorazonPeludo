import React, { useState } from "react";
import Save from "../../Buttons/Save";
import Cancel from "../../Buttons/Cancel";
import Clear from "../../Buttons/Clear";

import HeaderAdmin from "../../Menu/Header/HeaderAdmin/HeaderAdmin";
import Aside from "../../Menu/Aside/Aside";
import PageTitle from "../PageTitle";
import '../../../App.scss';
import '../../../App.css';

const RegistroCita = () => {
  const [registroCita, setRegistroCita] = useState({
    title: "Registro de Cita",
  })

  const { title } = registroCita
  return (
    <>
      <HeaderAdmin />
      <Aside />
      <main id="main" className="main">

        <PageTitle titulo={registroCita} />

        <section className="section">
          <div className="row">
            <div className="col-lg-12">

              <div className="card">
                <div className="card-body">
                  <h5 class="card-title titulo">{title}</h5>

                  {/* <h3 class="card-title">Ingreso de Citas</h3> */}

                  <form class="needs-validation" id="citaForm" novalidate>

                    <div class="row mb-3">
                      <div class="col-md-6 mb-3">
                        <label for="idCita" class="form-label">ID de la Cita</label>
                        <input type="text" class="form-control" id="idCita" disabled />
                      </div>
                    </div>

                    <div class="row mb-3">
                      <div class="col-md-6 mb-3">
                        <label for="name" class="form-label">Nombre del Solicitante</label>
                        <input type="text" class="form-control" id="name" required />
                      </div>

                      <div class="col-md-6">
                        <label for="apellido" class="form-label">Apellido del Solicitante</label>
                        <input type="text" class="form-control" id="apellido" required />
                      </div>
                    </div>

                    <div class="row mb-3">
                      <div class="col-md-6 mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" id="email" required />
                      </div>
                      <div class="col-md-6 mb-3">
                        <label for="telefono" class="form-label">Telefono</label>
                        <input type="number" class="form-control" id="telefono" required />
                      </div>
                    </div>

                    <div class="row mb-3">
                      <div class="col-md-6 mb-3">
                        <label for="mySelect" class="form-label">Tipo de Animal</label>
                        <select id="mySelect" class="form-select" required>
                          <option value="" disabled selected>Selecciona Una Opcion...</option>

                        </select>
                      </div>
                      <div class="col-md-6">
                        <label for="nombreAnimal" class="form-label">Nombre del animal (si aplica)</label>
                        <input type="text" class="form-control" id="nombreAnimal" />
                      </div>
                    </div>

                    <div class="row mb-3">
                      <div class="col-md-6  mb-3">
                        <label for="fechaCita" class="form-label">Fecha de la Cita</label>
                        <input type="date" class="form-control" id="nombreAnimal" required data-disponible="" />
                      </div>
                      <div class="col-md-6">
                        <label for="hora" class="form-label">Hora de la Cita</label>
                        <input type="time" class="form-control" id="hora" required data-disponible="" />
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

                  </form>


                </div>
              </div>

            </div>

          </div>
        </section>

      </main>
    </>
  )
}

export default RegistroCita
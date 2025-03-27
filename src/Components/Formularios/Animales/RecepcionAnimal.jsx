import React, { useState } from "react";
import Save from "../../Buttons/Save";
import Cancel from "../../Buttons/Cancel";
import Clear from "../../Buttons/Clear";
import "../../../App.css";
import "../../../App.scss";

import HeaderAdmin from "../../Menu/Header/HeaderAdmin/HeaderAdmin";
import Aside from "../../Menu/Aside/Aside";
import PageTitle from "../../ComponentesRepetitivos/PageTitle";
import Status from "../../ComponentesRepetitivos/Status";
import FechaModificacion from "../../ComponentesRepetitivos/FechaModificacion";

import EspeciesSelect from "../../Comp/CompEspeciesSelect";
import TipoAmput from "../../Comp/CompTipoAmput";
import CompOrigenAnimal from "../../Comp/CompOrigenAnimal";
import CompSexo from "../../Comp/CompSexo";


const RecepcionAnimal = () => {
  const [recepcionAnimal, setRecepcionAnimal] = useState({
    title: "Ingreso de Animales",
  });

  const { title } = recepcionAnimal;

  return (
    <>
      <HeaderAdmin />
      <Aside />
      <main id="main" className="main">
        <PageTitle titulo={recepcionAnimal} />
        <section className="section">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <h5 class="card-title titulo">{title}</h5>

                  <form action="" id="form">
                    <div className="row mb-3">
                      <div className="col-md-6 mb-3">
                        <label for="idAnimales" className="form-label">
                          ID Animales
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="idAnimales"
                          disabled
                        />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <div className="col-md-6 mb-3">
                        <label for="alias" className="form-label">
                          Alias
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="alias"
                        />
                      </div>
                      <div className="col-md-6">
                        <label for="edad" className="form-label">
                          Edad
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="edad"
                        />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <div className="col-md-6 mb-3">
                        <label for="peso" className="form-label">
                          Peso
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="peso"
                        />
                      </div>
                      <div className="col-md-6">
                        <label for="altura" className="form-label">
                          Altura
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="altura"
                        />
                      </div>
                    </div>

                    <div className="row mb-3"> 
                      <div className="col-md-6 mb-3">
                        <CompSexo tipo={'animal'}/>
                      </div> 
                      <div className="col-md-6">
                        <EspeciesSelect />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <div className="col-md-6 mb-3">
                        {/* <a href="../enums/registroTipoPiel.html">Crear nueva</a> */}
                        <label for="tipoPiel" className="form-label">
                          Tipo de Piel
                        </label>
                        <select id="tipoPiel" className="form-select">
                          <div className="data-display1"></div>
                        </select>
                      </div>
                      <div className="col-md-6">
                        {/* <label for="origen" className="form-label">
                          Origen Del Animal
                         </label>
                        <select id="origen" className="form-select">
                          <option value="" disabled selected>
                            Selecciona Una Opcion...
                          </option>
                          <option value="F">Nacido en el albergue</option>
                          <option value="M">Dado en adopcion</option>
                          <option value="M">Rescatado</option>
                        </select>*/}    
                      </div> 
                      <CompOrigenAnimal/>
                    </div>

                    <div className="row mb-3">
                      <div className="col-md-6 mb-3">
                        <label for="amputaciones" className="form-label">
                          Amputaciones
                        </label>
                        <select
                          id="amputaciones"
                          className="form-select"
                          onChange="activarAmp()"
                        >
                          <option value="" disabled selected>
                            Selecciona Una Opcion...
                          </option>
                          <option value="si">Si</option>
                          <option value="no">No</option>
                        </select>
                      </div>


                      <div className="col-md-6">
                        <TipoAmput/>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <div className="col-md-6 mb-3">
                        <label for="estado" className="form-label">
                          Estado de Salud del Animal
                        </label>
                        <select id="estado" className="form-select">
                          <option value="" disabled selected>
                            Selecciona Una Opcion...
                          </option>
                          <option value="saludable">Saludable</option>
                          <option value="enfermo">Enfermo</option>
                          <option value="desorientado">Desorientado</option>
                          <option value="agresivo">Agresivo</option>
                        </select>
                      </div>
                      <div className="col-md-6">
                        <label for="fechaIngreso" className="form-label">
                          Fecha de Ingreso
                        </label>
                        <input
                          type="date"
                          id="fechaIngreso"
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="row  mb-3">
                      <div className="col-md-6 mb-3">
                        <label for="colorFisico" className="form-label">
                          Color Fisico Del Animal
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="colorFisico"
                          placeholder="Ejemplo: Blanco con manchas negras"
                        />
                      </div>
                      <div className="col-md-6">
                        <label for="colorOjos" className="form-label">
                          Color De Ojos Del Animal
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="colorOjos"
                          placeholder="Ejemplo: Azules"
                        />
                      </div>
                    </div>

                    <div className="row mb-5">
                      <Status />
                      <FechaModificacion />
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
  );
};

export default RecepcionAnimal;

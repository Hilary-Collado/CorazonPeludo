import React, { useState } from "react";
import Save from "../../Buttons/Save";
import Cancel from "../../Buttons/Cancel";
import Clear from "../../Buttons/Clear";
import "../../../App.css";
import "../../../App.scss";
import axios from "axios";

import HeaderAdmin from "../../Menu/Header/HeaderAdmin/HeaderAdmin";
import Aside from "../../Menu/Aside/Aside";
import PageTitle from "../../ComponentesRepetitivos/PageTitle";
import Status from "../../ComponentesRepetitivos/Status";
import FechaModificacion from "../../ComponentesRepetitivos/FechaModificacion";

import EspeciesSelect from "../../Comp/CompEspeciesSelect";
import TipoAmputacion from "../../Comp/CompTipoAmput";
import CompOrigenAnimal from "../../Comp/CompOrigenAnimal";
import CompSexo from "../../Comp/CompSexo";
import CompTipoPiel from "../../Comp/CompTipoPiel";
import EstadoSalud from "../../Comp/CompEstadoSalud";
import CompRaza from "../../Comp/CompRaza";
import CompCondicionAdmision from "../../Comp/CompCondicionAdmision";
import CompColorAnimal from "../../Comp/CompColorAnimal";
import CompEdad from "../../Comp/CompEdad";

const RecepcionAnimal = () => {
  const [recepcionAnimal, setRecepcionAnimal] = useState({
    title: "Ingreso de Animales",
  });

  const [formData, setFormData] = useState({
    nombre: "",
    edad_ingreso: "",
    idTipoEdad:"",
    peso_ingreso: "",
    altura_ingreso: "",
    idSexo: "",
    idEspecie: "",
    idRaza: "",
    idTipoPiel: "",
    idOrigenAnimal: "",
    idCondicionAdmision: "",
    amputaciones: "",
    idTipoAmputaciones: "",
    idColorFisico: "",
    idColorOjos: "",
    estatus: "1", // Activo por defecto
  });

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    const payload = {
      ...formData,
      idTipoAmputaciones:
        formData.amputaciones === "1" ? formData.idTipoAmputaciones : null,
    };
    console.log("🐾 Enviando al backend:", payload);

    try {
      if (formData.amputaciones === "1" && !formData.idTipoAmputaciones) {
        alert("Debes seleccionar un tipo de amputación.");
        return;
      }

      const response = await axios.post(
        "http://localhost:5000/api/animales",
        payload
      );

      if (response.status === 200 || response.status === 201) {
        alert("Animal registrado correctamente");
      } else {
        alert("Error al registrar el animal");
      }
    } catch (error) {
      console.error("Error al enviar los datos:", error);
      alert("Error al enviar los datos: " + error.message);
    }
  };

  const handleFieldChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const { title } = recepcionAnimal;

  // const today = new Date().toISOString().split("T")[0];

  return (
    <>
      <HeaderAdmin />
      <Aside />
      <main id="main" className="main text-transform: capitalize">
        <PageTitle titulo={recepcionAnimal} />
        <section className="section">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <h5 class="card-title titulo">{title}</h5>

                  <form action="" id="form" onSubmit={handleSubmit}>
                    <div className="row mb-3">
                      <div className="col-md-6 mb-3">
                        <label for="nombre" className="form-label">
                          nombre
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="nombre"
                          value={formData.nombre}
                          onChange={(e) =>
                            setFormData({ ...formData, nombre: e.target.value })
                          }
                        />
                      </div>
                      {/* <div className="col-md-6">
                        <label for="edad" className="form-label">
                          Edad
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="edad_ingreso"
                          value={formData.edad_ingreso}
                          onChange={(e) =>
                            setFormData({ ...formData, edad_ingreso: e.target.value })
                          }
                        />
                      </div> */}
                      <CompEdad formData={formData} setFormData={setFormData}/>
                    </div>

                    <div className="row mb-3">
                      <div className="col-md-6 mb-3">
                        <label for="peso" className="form-label">
                          Peso
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          placeholder="kilogramos"
                          id="peso_ingreso"
                          value={formData.peso_ingreso}
                          onChange={(e) =>
                            setFormData({ ...formData, peso_ingreso: e.target.value })
                          }
                        />
                      </div>
                      <div className="col-md-6">
                        <label for="altura" className="form-label">
                          Altura
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="altura_ingreso"
                          value={formData.altura_ingreso}
                          onChange={(e) =>
                            setFormData({ ...formData, altura_ingreso: e.target.value })
                          }
                        />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <div className="col-md-6 mb-3">
                        <CompSexo
                          tipo={"animal"}
                          onChange={(id) => handleFieldChange("idSexo", id)}
                        />
                      </div>
                      <div className="col-md-6">
                        <EspeciesSelect
                          onChange={(id) => handleFieldChange("idEspecie", id)}
                        />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <div className="col-md-6 mb-3">
                        <CompRaza
                          onChange={(id) => handleFieldChange("idRaza", id)}
                        />
                      </div>
                      <div className="col-md-6">
                        <CompTipoPiel
                          onChange={(id) => handleFieldChange("idTipoPiel", id)}
                        />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <div className="col-md-6 mb-3">
                        <CompOrigenAnimal
                          onChange={(id) =>
                            handleFieldChange("idOrigenAnimal", id)
                          }
                        />
                        {/* <CompTipoPiel onChange={(id) => handleFieldChange('idTipoPiel', id)}/> */}
                      </div>
                      <div className="col-md-6">
                        <CompCondicionAdmision
                          onChange={(id) =>
                            handleFieldChange("idCondicionAdmision", id)
                          }
                        />
                        {/* <CompOrigenAnimal onChange={(id) => handleFieldChange('idOrigenAnimal', id)}/> */}
                      </div>
                    </div>

                    <div className="row mb-3">
                      <div className="col-md-6 mb-3">
                        <label for="amputaciones" className="form-label">
                          ¿Tiene amputaciones?
                        </label>
                        <select
                          id="amputaciones"
                          className="form-select"
                          value={formData.amputaciones}
                          onChange={(e) => {
                            const valor = e.target.value;
                            setFormData((prev) => ({
                              ...prev,
                              amputaciones: valor,
                              idTipoAmputaciones:
                                valor === "1"
                                  ? formData.idTipoAmputaciones
                                  : null,
                            }));
                          }}
                        >
                          <option value="" disabled>
                            Selecciona Una Opcion...
                          </option>
                          <option value="1">Si</option>
                          <option value="0">No</option>
                        </select>
                      </div>

                      <div className="col-md-6">
                        <TipoAmputacion
                          onChange={(id) =>
                            handleFieldChange("idTipoAmputaciones", id)
                          }
                          disabled={formData.amputaciones !== "1"}
                          value={formData.idTipoAmputaciones || ""}
                        />
                      </div>
                    </div>


                    <div className="row  mb-3">
                      <CompColorAnimal />
                    </div>

                    <div className="row mb-5">
                      <Status
                        value={formData.estatus}
                        onChange={(val) => handleFieldChange("estatus", val)}
                      />
                      <FechaModificacion />
                    </div>

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

export default RecepcionAnimal;

import React, { useState } from "react";
import Save from "../../Buttons/Save";
import Cancel from "../../Buttons/Cancel";
import Clear from "../../Buttons/Clear";
import "../../../App.css";
import "../../../App.scss";
import axios from 'axios';

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

const RecepcionAnimal = () => {
  const [recepcionAnimal, setRecepcionAnimal] = useState({
    title: "Ingreso de Animales",
  });

  const [formData, setFormData] = useState({
    alias: "",
    edad: "",
    peso: "",
    altura: "",
    colorFisico: "",
    colorOjos: "",
    estatus: "1", // Activo por defecto
    idSexo: "",
    idOrigenAnimal: "",
    idEstadoSalud: "",
    idTipoPiel: "",
    idTipoAmputaciones: "",
    idEspecie: "",
    amputaciones: "",
    fechaIngreso: new Date().toISOString().split("T")[0], // Fecha de ingreso por defecto
  });

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    const payload = {
      ...formData,
      idTipoAmputaciones: formData.amputaciones === "1" ? formData.idTipoAmputaciones : null,
    }
    console.log("🐾 Enviando al backend:", payload);

    try {
      if (formData.amputaciones === "1" && !formData.idTipoAmputaciones) {
        alert("Debes seleccionar un tipo de amputación.");
        return;
      }
      

      const response = await axios.post("http://localhost:5000/api/animales", payload);

      if(response.status === 200 || response.status === 201){
        alert("Animal registrado correctamente");
      }
      else{
        alert("Error al registrar el animal");
      }
    } catch (error) {
      console.error("Error al enviar los datos:", error);
      alert("Error al enviar los datos: " + error.message);
      
    }
  }

  const handleFieldChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  

  const { title } = recepcionAnimal;

  const today = new Date().toISOString().split("T")[0];

  return (
    <>
      <HeaderAdmin />
      <Aside />
      <main id="main" className="main capp">
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
                        <label for="alias" className="form-label">
                          Alias
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="alias"
                          value={formData.alias}
                          onChange={(e) => setFormData({...formData, alias: e.target.value})}
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
                          value={formData.edad}
                          onChange={(e) => setFormData({...formData, edad: e.target.value})}
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
                          value={formData.peso}
                          onChange={(e) => setFormData({...formData, peso: e.target.value})}
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
                          value={formData.altura}
                          onChange={(e) => setFormData({...formData, altura: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <div className="col-md-6 mb-3">
                        <CompSexo tipo={"animal"} onChange={(id) => handleFieldChange('idSexo', id)}/>
                      </div>
                      <div className="col-md-6">
                        <EspeciesSelect onChange={(id) => handleFieldChange('idEspecie', id)}/>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <div className="col-md-6 mb-3">
                        <CompTipoPiel onChange={(id) => handleFieldChange('idTipoPiel', id)}/>
                      </div>
                      <div className="col-md-6">
                        <CompOrigenAnimal onChange={(id) => handleFieldChange('idOrigenAnimal', id)}/>
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
                              idTipoAmputaciones: valor === "1" ? formData.idTipoAmputaciones: null
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
                        onChange={(id) => handleFieldChange("idTipoAmputaciones", id)}
                          disabled = {formData.amputaciones !== '1'} 
                          value={formData.idTipoAmputaciones || ""}/>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <div className="col-md-6 mb-3">
                        <EstadoSalud onChange={(id) => handleFieldChange("idEstadoSalud", id)}/>
                      </div>
                      <div className="col-md-6">
                        <label for="fechaIngreso" className="form-label">
                          Fecha de Ingreso
                        </label>
                        <input
                          type="date"
                          id="fechaIngreso"
                          className="form-control"
                          defaultValue={today}
                          value={formData.fechaIngreso}
                          onChange={(e) => handleFieldChange("fechaIngreso", e.target.value)}  
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
                          value={formData.colorFisico}
                          onChange={(e) => setFormData({...formData, colorFisico: e.target.value})}
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
                          value={formData.colorOjos}
                          onChange={(e) => setFormData({...formData, colorOjos: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="row mb-5">
                      <Status value={formData.estatus} onChange={(val) => handleFieldChange("estatus", val)}/>
                      <FechaModificacion />
                    </div>

                    <div className="text-center  mb-3">
                      <Save onClick={handleSubmit}/>
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




// alias,edad, peso, altura, idSexo,idEspecie,idTipoPiel,idOrigenAnimal,amputaciones,idTipoAmputaciones,idEstadoSalud,fechaIngreso,colorFisico,colorOjos,estatus,

// @alias, @edad, @peso, @altura, @idSexo, @idEspecie @idTipoPiel, @idOrigenAnimal, @amputaciones, @idTipoAmputaciones @idEstadoSalud, @fechaIngreso, @colorFisico, @colorOjos, @estatus,
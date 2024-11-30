import React from "react";
import Save from "../../Buttons/Save";
import Cancel from "../../Buttons/Cancel";
import Clear from "../../Buttons/Clear";
import Footer from "../../Footer/Footer";
import Button from "../../Buttons/Buttons";

import '../../Buttons/Buttons.scss';

const RecepcionAnimal = () => {

    const handleSubmit = () => {
        console.log("funcion enviar")
    }

    return (
        <>
            <h3 className="card-title">Ingreso De Animales</h3>

            <form action="" id="form" onSubmit={handleSubmit}>
                <div class="row mb-3">
                    <div class="col-md-6 mb-3">
                        <label for="idAnimales" class="form-label">ID Animales</label>
                        <input type="text" className="form-control" id="idAnimales" disabled />
                    </div>
                </div>

                <div class="row mb-3">
                    <div class="col-md-6 mb-3">
                        <label for="alias" class="form-label">Alias</label>
                        <input type="text" class="form-control" id="alias" />
                    </div>
                    <div class="col-md-6">
                        <label for="edad" class="form-label">Edad</label>
                        <input type="number" class="form-control" id="edad" />
                    </div>
                </div>


                <div class="row mb-3">
                    <div class="col-md-6 mb-3">
                        <label for="peso" class="form-label">Peso</label>
                        <input type="number" class="form-control" id="peso" />
                    </div>
                    <div class="col-md-6">
                        <label for="altura" class="form-label">Altura</label>
                        <input type="number" class="form-control" id="altura" />
                    </div>
                </div>

                <div class="row mb-3">
                    <div class="col-md-6 mb-3">
                        <label for="sexo" class="form-label">Sexo</label>
                        <select id="sexo" class="form-select"  >
                            <option value="" disabled selected>Selecciona Una Opcion...</option>
                            <option value="F">Hembra</option>
                            <option value="M">Macho</option>
                        </select>
                    </div>

                    <div class="col-md-6">
                        {/* <a href="../enums/registroEspecie.html">Crear nueva</a> */}
                        <label for="especie" class="form-label">Especie</label>
                        <select id="especie" class="form-select"  >
                            <div class="data-display0"></div>
                        </select>
                    </div>
                </div>

                <div class="row mb-3">
                    <div class="col-md-6 mb-3">
                        {/* <a href="../enums/registroTipoPiel.html">Crear nueva</a> */}
                        <label for="tipoPiel" class="form-label">Tipo de Piel</label>
                        <select id="tipoPiel" class="form-select"  >
                            <div class="data-display1"></div>
                        </select>
                    </div>
                    <div class="col-md-6">
                        <label for="origen" class="form-label">Origen Del Animal</label>
                        <select id="origen" class="form-select"  >
                            <option value="" disabled selected>Selecciona Una Opcion...</option>
                            <option value="F">Nacido en el albergue</option>
                            <option value="M">Dado en adopcion</option>
                            <option value="M">Rescatado</option>
                        </select>
                    </div>
                </div>



                <div class="row mb-3">
                    <div class="col-md-6 mb-3">

                        <label for="amputaciones" class="form-label">Amputaciones</label>
                        <select id="amputaciones" class="form-select" onchange="activarAmp()">
                            <option value="" disabled selected>Selecciona Una Opcion...</option>
                            <option value="si">Si</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div class="col-md-6">
                        <label for="tipoAmputacion" class="form-label">Tipo de Amputaciones</label>
                        <select id="tipoAmputacion" class="form-select">
                            <option value="" disabled selected>Selecciona Una Opcion...</option>
                            <option value="pierna">Pierna</option>
                            <option value="oreja">Oreja</option>
                            <option value="cola">Cola</option>
                            <option value="castacion">Castracion</option>
                            <option value="castacion">Ninguna</option>
                        </select>
                    </div>
                </div>


                <div class="row mb-3">
                    <div class="col-md-6 mb-3">
                        <label for="estado" class="form-label">Estado de Salud del Animal</label>
                        <select id="estado" class="form-select"  >
                            <option value="" disabled selected>Selecciona Una Opcion...</option>
                            <option value="saludable">Saludable</option>
                            <option value="enfermo">Enfermo</option>
                            <option value="desorientado">Desorientado</option>
                            <option value="agresivo">Agresivo</option>
                        </select>
                    </div>
                    <div class="col-md-6">
                        <label for="fechaIngreso" class="form-label">Fecha de Ingreso</label>
                        <input type="date" id="fechaIngreso" class="form-control" />
                    </div>
                </div>



                <div class="row  mb-3">
                    <div class="col-md-6 mb-3">
                        <label for="colorFisico" class="form-label">Color Fisico Del Animal</label>
                        <input type="text" class="form-control" id="colorFisico"
                            placeholder="Ejemplo: Blanco con manchas negras" />
                    </div>
                    <div class="col-md-6">
                        <label for="colorOjos" class="form-label">Color De Ojos Del Animal</label>
                        <input type="text" class="form-control" id="colorOjos" placeholder="Ejemplo: Azules" />
                    </div>
                </div>


                <div class="row mb-5">
                    <div class="col-md-6 mb-3">
                        <label for="status" class="form-label">Status</label>
                        <select id="status" class="form-select"  >
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

                <div className="buttons row mb-4">
                    <section className="col-md-1"><Save /></section>
                    <section className="col-md-1"><Clear /></section>
                    <section className="col-md-1"><Cancel /></section>
                </div>



            </form>
        </>

    )
}


export default RecepcionAnimal
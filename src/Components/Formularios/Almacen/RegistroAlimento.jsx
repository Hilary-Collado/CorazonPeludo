import React, { useState } from "react";
import Save from "../../Buttons/Save";
import Cancel from "../../Buttons/Cancel";
import Clear from "../../Buttons/Clear";
import PageTitle from "../PageTitle";

import HeaderAdmin from "../../Menu/Header/HeaderAdmin/HeaderAdmin";
import Aside from "../../Menu/Aside/Aside";

import '../../../App.scss';
import '../../../App.css';

import Status from "../../ComponentesRepetitivos/Status";
import FechaModificacion from "../../ComponentesRepetitivos/FechaModificacion";


const RegistroAlimento = () => {
    const [registroAlimento, setRegistroAlimento] = useState({
        title: "Ingreso De Alimentos",
    })

    const { title } = registroAlimento

    return (
        <>
            <HeaderAdmin />
            <Aside />
            <main id="main" className="main">
                <PageTitle titulo={registroAlimento} />
                <section className="section">
                    <div className="row">
                        <div className="col-lg-12">

                            <div className="card">
                                <div className="card-body">
                                    <h5 class="card-title titulo">{title}</h5>

                                    <form class="needs-validation" id="form" novalidate>

                                        <div class="row mb-3">
                                            <div class="col-md-6 mb-3">
                                                <label for="idAlimentos" class="form-label">ID Alimento</label>
                                                <input type="text" class="form-control" id="idAlimentos" disabled />
                                            </div>
                                        </div>


                                        <div class="row mb-3">
                                            <div class="col-md-6 mb-3">
                                                <label for="nombre" class="form-label">Nombre</label>
                                                <input type="text" class="form-control" id="nombre" required />
                                            </div>
                                            <div class="col-md-6">
                                                <label for="lote" class="form-label">Lote</label>
                                                <input type="text" class="form-control" id="lote" required />
                                            </div>
                                        </div>


                                        <div class="row mb-3">
                                            <div class="col-md-6 mb-3">
                                                <a href="../enums/registroMarca.html">Crear nueva</a>
                                                <label for="marca" class="form-label">Marca</label>
                                                <select id="marca" class="form-select" required>
                                                    <div id="data-display1">Selecciona Una Opcion...</div>
                                                </select>
                                            </div>

                                            <div class="col-md-6">
                                                <label for="costo" class="form-label">Costo</label>
                                                <input type="number" class="form-control" id="costo" required />
                                            </div>
                                        </div>

                                        <div class="row mb-3">
                                            <div class="col-md-6 mb-3">
                                                <label for="tipoAlimento" class="form-label">Tipo De Alimentos</label>
                                                <select id="tipoAlimento" class="form-select" required>
                                                </select>
                                            </div>

                                            <div class="col-md-6">
                                                <label for="contenido" class="form-label">Contenido</label>
                                                <input type="text" class="form-control" id="contenido" required />
                                            </div>

                                        </div>

                                        <div class="row mb-3">
                                            <div class="col-md-6 mb-3">
                                                <label for="unidadMedida" class="form-label">Unidad De Medida</label>
                                                <select id="unidadMedida" class="form-select" required>
                                                    <option value="" disabled selected>Selecciona Una Opcion...</option>
                                                    <option value="lb">libras</option>
                                                    <option value="gr">gramos</option>
                                                    <option value="onz">onzas</option>
                                                    <option value="kg">kilogramos</option>
                                                </select>
                                            </div>

                                            <div class="col-md-6">
                                                <label for="fechaVencimiento" class="form-label">Fecha De Vencimiento</label>
                                                <input type="date" id="fechaVencimiento" class="form-control" required />
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
    )
}

export default RegistroAlimento;
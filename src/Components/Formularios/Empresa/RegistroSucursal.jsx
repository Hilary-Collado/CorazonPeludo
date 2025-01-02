import React, { useState } from "react";
import Save from "../../Buttons/Save";
import Cancel from "../../Buttons/Cancel";
import Clear from "../../Buttons/Clear";

import '../../../App.css';
import '../../../App.scss';

import HeaderAdmin from "../../Menu/Header/HeaderAdmin/HeaderAdmin";
import Aside from "../../Menu/Aside/Aside";
import PageTitle from "../PageTitle";

const RegistroSucursal = () => {

    const [registroSucursal, setRegistroSucursal] = useState({
        title: "registro de sucursal",
    })

    const { title } = registroSucursal
    return (
        <>
            <HeaderAdmin />
            <Aside />

            <main id="main" className="main">

                <PageTitle titulo={registroSucursal} />

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
                                                <label for="idSucursal" class="form-label">ID Sucursal</label>
                                                <input type="text" class="form-control" id="idSucursal" disabled />
                                            </div>
                                        </div>

                                        <div class="row mb-3">
                                            <div class="col-md-6">
                                                <label for="nombre" class="form-label">Nombre</label>
                                                <input type="text" class="form-control" id="nombre" required />
                                            </div>
                                            <div class="col-md-6">
                                                {/* CREAR UN MODAL CON LOS CAMPOS DE COMPAñIA PARA QUE NO HAYA QUE SALIR DE ESTE FORMULARIO   */}
                                                {/* <a href="../tercero/">Crear nueva</a> */}
                                                <label for="compania" class="form-label">Compañia</label>
                                                <select id="compania" class="form-select" required>
                                                    <div id="data-display">Selecciona Una Opcion...</div>
                                                </select>
                                            </div>
                                        </div>


                                        <div class="row mb-3">
                                            <div class="col-md-6">
                                                <label for="rnc" class="form-label">RNC</label>
                                                <input type="text" class="form-control" id="rnc" />
                                            </div>

                                            {/* esto debe ser un select */}
                                            <div class="col-md-6 mb-3">
                                                <label for="tipoEmpresa" class="form-label">Tipo empresa</label>
                                                <input type="text" class="form-control" id="tipoEmpresa" />
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

export default RegistroSucursal
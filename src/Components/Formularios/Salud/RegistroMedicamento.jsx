import React, { useState } from "react";
import Save from "../../Buttons/Save";
import Cancel from "../../Buttons/Cancel";
import Clear from "../../Buttons/Clear";
import '../../../App.css';
import '../../../App.scss';

import HeaderAdmin from "../../Menu/Header/HeaderAdmin/HeaderAdmin";
import Aside from "../../Menu/Aside/Aside";
import PageTitle from "../PageTitle";

const RegistroMedicamento = () => {
    const [registroMedicamento, setRegistroMedicamento] = useState({
        title: "registro de complicaciones",
    })

    const { title } = registroMedicamento

    return (
        <>
            <HeaderAdmin />
            <Aside />

            <main id="main" className="main">

                <PageTitle titulo={registroMedicamento} />

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
                                                <label for="alias" class="form-label">ID Medicamento</label>
                                                <input type="text" class="form-control" id="nombre" disabled />
                                            </div>
                                        </div>

                                        <div class="row mb-3">
                                            <div class="col-md-6 mb-3">
                                                <a href="../enums/registroTipoMedicamento.html">Crear nuevo</a>
                                                <label for="mySelect" class="form-label">Tipo de Medicamento</label>
                                                <select id="mySelect" class="form-select" required>
                                                </select>
                                            </div>
                                            <div class="col-md-6 mb-3">
                                                <label for="alias" class="form-label">Nombre</label>
                                                <input type="text" class="form-control" id="nombre" required />
                                            </div>
                                        </div>


                                        <div class="row mb-3">
                                            <div class="col-md-6 mb-3">
                                                <label for="marca" class="form-label">Marca</label>
                                                <input type="text" class="form-control" id="marca" required />
                                            </div>
                                            <div class="col-md-6">
                                                <label for="laboratorio" class="form-label">Laboratorio</label>
                                                <input type="text" class="form-control" id="laboratorio" required />
                                            </div>
                                        </div>

                                        <div class="row mb-3">
                                            <div class="col-md-6 mb-3">
                                                <label for="costo" class="form-label">costo</label>
                                                <input type="number" class="form-control" id="costo" required />
                                            </div>
                                            <div class="col-md-6">
                                                <label for="edad" class="form-label">Lote</label>
                                                <input type="text" class="form-control" id="lote" required />
                                            </div>
                                        </div>

                                        <div class="row mb-3">
                                            <div class="col-md-6 mb-3">
                                                <label for="viaAdministracion" class="form-label">Via de administración</label>
                                                <input type="text" class="form-control" id="viaAdminstracion" required />
                                            </div>

                                            <div class="col-md-6">
                                                <label for="fechaVencimiento" class="form-label">Fecha De Vencimiento</label>
                                                <input type="fechaVencimiento" class="form-control" required />
                                            </div>

                                        </div>

                                        <div class="row mb-4">
                                            <div class="col-md-6 mb-3">
                                                <label for="status" class="form-label">Status</label>
                                                <select id="status" class="form-select" required>
                                                    <option value="" disabled selected>Selecciona Una Opcion...</option>
                                                    <option value="1">Activo</option>
                                                    <option value="0">Inactivo</option>
                                                </select>
                                            </div>
                                            <div class="col-md-6">
                                                <label for="fechaModificacion" class="form-label">Fecha De Modificacion</label>
                                                <input type="date" id="fechaModificacion" class="form-control" disabled />
                                            </div>
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

export default RegistroMedicamento
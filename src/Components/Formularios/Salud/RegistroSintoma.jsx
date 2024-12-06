import React from "react";
import Save from "../../Buttons/Save";
import Cancel from "../../Buttons/Cancel";
import Clear from "../../Buttons/Clear";
import Footer from "../../Footer/Footer";

const RegistroSintoma = () => {
    return (
        <>
            <main id="main" class="main">

                <div class="pagetitle">
                    <h1>Registro de síntoma</h1>
                    <nav>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li class="breadcrumb-item">Formularios</li>
                            <li class="breadcrumb-item active">Registro síntoma</li>
                        </ol>
                    </nav>
                </div>
                {/* <!-- End Page Title --> */}

                <section class="section">
                    <div class="row">
                        <div class="col-lg-12">

                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Registro de Síntomas</h5>

                                    {/* <!-- General Form Elements --> */}
                                    <form class="needs-validation" id="form" novalidate>
                                        <div class="row mb-3">
                                            <div class="col-md-6 mb-3">
                                                <label for="idSintoma" class="form-label">ID Sintoma</label>
                                                <input type="text" class="form-control" id="idSintoma" disabled />
                                            </div>
                                        </div>

                                        <div class="row mb-3">
                                            <div class="col-md-6">
                                                <label for="descripcion" class="form-label">Descripcion</label>
                                                <input type="text" class="form-control" id="descripcion" required />
                                            </div>
                                            <div class="col-md-6">
                                                <a href="../enums/registroTipoSintoma.html">Crear nuevo</a>
                                                <label for="tipoSintoma" class="form-label">Tipo Síntomas</label>
                                                <select id="tipoSintoma" class="form-select" required>
                                                    <div id="data-display"></div>
                                                </select>
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

export default RegistroSintoma
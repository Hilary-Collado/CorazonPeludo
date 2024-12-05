import React from "react";
import Save from "../../Buttons/Save";
import Cancel from "../../Buttons/Cancel";
import Clear from "../../Buttons/Clear";
import Footer from "../../Footer/Footer";
import Aside from "../../Menu/Aside/Aside";
import HeaderDos from "../../Menu/Header/HeaderAdmin/HeaderAdmin";

const Cirugia = () => {
    return (
        <>
            <HeaderDos />
            <Aside />

            <main id="main" class="main">

                <div class="pagetitle">
                    <h1>Registro de Cirugía</h1>
                    <nav>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li class="breadcrumb-item">Formularios</li>
                            <li class="breadcrumb-item active">Registro de Cirugía</li>
                        </ol>
                    </nav>
                </div>
                {/* <!-- End Page Title --> */}

                <section class="section">
                    <div class="row">
                        <div class="col-lg-12">

                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Ingreso de Cirugía</h5>

                                    {/* <!-- General Form Elements --> */}
                                    <form class="needs-validation" id="form" novalidate>

                                        <div class="row mb-3">
                                            <div class="col-md-6 mb-3">
                                                <label for="idCirugia" class="form-label">ID Cirugía</label>
                                                <input type="text" class="form-control" id="idCirugia" disabled />
                                            </div>
                                            <div class="col-md-6">
                                                <label for="idAnimal" class="form-label">ID Animal</label>
                                                <input type="number" class="form-control" id="idAnimal" />
                                            </div>
                                        </div>

                                        <div class="row mb-3">
                                            <div class="col-md-6 mb-3">
                                                <label for="tipoCirugia" class="form-label">Tipo de Cirugía</label>
                                                <input type="text" class="form-control" id="tipoCirugia" required />
                                            </div>

                                            <div class="col-md-6">
                                                <label for="quirofano" class="form-label">Quirófano</label>
                                                <input type="text" class="form-control" id="quirofano" required />
                                            </div>
                                        </div>

                                        <div class="row mb-3">
                                            <div class="col-md-6 mb-3">
                                                <label for="fecha" class="form-label">Fecha</label>
                                                <input type="date" class="form-control" id="fecha" required />
                                            </div>

                                            <div class="col-md-6">
                                                <label for="horaInicio" class="form-label">Hora de Inicio</label>
                                                <input type="time" class="form-control" id="horaInicio" required />
                                            </div>
                                        </div>

                                        <div class="row mb-3">
                                            <div class="col-md-6 mb-3">
                                                <label for="horaFin" class="form-label">Hora de Finalización</label>
                                                <input type="time" class="form-control" id="horaFin" required />
                                            </div>

                                            <div class="col-md-6">
                                                <label for="medicoPrincipal" class="form-label">Médico Veterinario Principal</label>
                                                <input type="text" class="form-control" id="medicoPrincipal" required />
                                            </div>
                                        </div>

                                        <div class="row mb-3">
                                            <div class="col-md-6 mb-3">
                                                <label for="medicosAsistentes" class="form-label">Médicos Asistentes</label>
                                                <input type="text" class="form-control" id="medicosAsistentes" />
                                            </div>

                                            <div class="col-md-6">
                                                <label for="anestesista" class="form-label">Anestesista</label>
                                                <input type="text" class="form-control" id="anestesista" />
                                            </div>
                                        </div>

                                        <div class="row mb-3">
                                            <div class="col-md-6 mb-3">
                                                <label for="tipoAnestesia" class="form-label">Tipo de Anestesia</label>
                                                <input type="text" class="form-control" id="tipoAnestesia" />
                                            </div>

                                            <div class="col-md-6">
                                                <label for="duracionCirugia" class="form-label">Duración de la Cirugía (minutos)</label>
                                                <input type="number" class="form-control" id="duracionCirugia" min="0" />
                                            </div>
                                        </div>

                                        <div class="row mb-3">
                                            <div class="col-md-6 mb-3">
                                                <label for="instrumental" class="form-label">Instrumental Utilizado</label>
                                                <input type="text" class="form-control" id="instrumental" />
                                            </div>

                                            <div class="col-md-6">
                                                <label for="materialConsumo" class="form-label">Material de Consumo Utilizado</label>
                                                <input type="text" class="form-control" id="materialConsumo" />
                                            </div>
                                        </div>

                                        <div class="row mb-3">
                                            <div class="col-md-6 mb-3">
                                                <label for="complicaciones" class="form-label">Complicaciones</label>
                                                <select id="complicaciones" class="form-select" required>
                                                    <option value="" disabled selected>Selecciona Una Opcion...</option>
                                                    <option value="Hemorragia">Hemorragia</option>
                                                    <option value="Infección postoperatoria">Infección postoperatoria</option>
                                                    <option value="Complicaciones anestésicas">Complicaciones anestésicas</option>
                                                    <option value="Lesión de órganos">Lesión de órganos</option>
                                                    <option value="Reacción alérgica">Reacción alérgica</option>
                                                </select>
                                            </div>

                                            <div class="col-md-6">
                                                <label for="diagnosticoPostoperatorio" class="form-label">Diagnóstico Postoperatorio</label>
                                                <input type="text" class="form-control" id="diagnosticoPostoperatorio" />
                                            </div>
                                        </div>

                                        <div class="text-center mb-3">
                                            <button type="submit" class="btn btn-primary buttonSubmit">Enviar</button>
                                            <button type="reset" class="btn btn-outline-danger">Limpiar</button>
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

export default Cirugia
import React from "react";
import Save from "../../Buttons/Save";
import Cancel from "../../Buttons/Cancel";
import Clear from "../../Buttons/Clear";
import Footer from "../../Footer/Footer";
import Aside from "../../Menu/Aside/Aside";
import HeaderAdmin from "../../Menu/Header/HeaderAdmin/HeaderAdmin";

const Cirugia = () => {
    return (
        <>
            <HeaderAdmin />
            <Aside />

            <main id="main" className="main">

                <div className="pagetitle">
                    <h1>Registro de Cirugía</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li className="breadcrumb-item">Formularios</li>
                            <li className="breadcrumb-item active">Registro de Cirugía</li>
                        </ol>
                    </nav>
                </div>
                {/* <!-- End Page Title --> */}

                <section className="section">
                    <div className="row">
                        <div className="col-lg-12">

                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Ingreso de Cirugía</h5>

                                    {/* <!-- General Form Elements --> */}
                                    <form className="needs-validation" id="form" novalidate>

                                        <div className="row mb-3">
                                            <div className="col-md-6 mb-3">
                                                <label for="idCirugia" className="form-label">ID Cirugía</label>
                                                <input type="text" className="form-control" id="idCirugia" disabled />
                                            </div>
                                            <div className="col-md-6">
                                                <label for="idAnimal" className="form-label">ID Animal</label>
                                                <input type="number" className="form-control" id="idAnimal" />
                                            </div>
                                        </div>

                                        <div className="row mb-3">
                                            <div className="col-md-6 mb-3">
                                                <label for="tipoCirugia" className="form-label">Tipo de Cirugía</label>
                                                <input type="text" className="form-control" id="tipoCirugia" required />
                                            </div>

                                            <div className="col-md-6">
                                                <label for="quirofano" className="form-label">Quirófano</label>
                                                <input type="text" className="form-control" id="quirofano" required />
                                            </div>
                                        </div>

                                        <div className="row mb-3">
                                            <div className="col-md-6 mb-3">
                                                <label for="fecha" className="form-label">Fecha</label>
                                                <input type="date" className="form-control" id="fecha" required />
                                            </div>

                                            <div className="col-md-6">
                                                <label for="horaInicio" className="form-label">Hora de Inicio</label>
                                                <input type="time" className="form-control" id="horaInicio" required />
                                            </div>
                                        </div>

                                        <div className="row mb-3">
                                            <div className="col-md-6 mb-3">
                                                <label for="horaFin" className="form-label">Hora de Finalización</label>
                                                <input type="time" className="form-control" id="horaFin" required />
                                            </div>

                                            <div className="col-md-6">
                                                <label for="medicoPrincipal" className="form-label">Médico Veterinario Principal</label>
                                                <input type="text" className="form-control" id="medicoPrincipal" required />
                                            </div>
                                        </div>

                                        <div className="row mb-3">
                                            <div className="col-md-6 mb-3">
                                                <label for="medicosAsistentes" className="form-label">Médicos Asistentes</label>
                                                <input type="text" className="form-control" id="medicosAsistentes" />
                                            </div>

                                            <div className="col-md-6">
                                                <label for="anestesista" className="form-label">Anestesista</label>
                                                <input type="text" className="form-control" id="anestesista" />
                                            </div>
                                        </div>

                                        <div className="row mb-3">
                                            <div className="col-md-6 mb-3">
                                                <label for="tipoAnestesia" className="form-label">Tipo de Anestesia</label>
                                                <input type="text" className="form-control" id="tipoAnestesia" />
                                            </div>

                                            <div className="col-md-6">
                                                <label for="duracionCirugia" className="form-label">Duración de la Cirugía (minutos)</label>
                                                <input type="number" className="form-control" id="duracionCirugia" min="0" />
                                            </div>
                                        </div>

                                        <div className="row mb-3">
                                            <div className="col-md-6 mb-3">
                                                <label for="instrumental" className="form-label">Instrumental Utilizado</label>
                                                <input type="text" className="form-control" id="instrumental" />
                                            </div>

                                            <div className="col-md-6">
                                                <label for="materialConsumo" className="form-label">Material de Consumo Utilizado</label>
                                                <input type="text" className="form-control" id="materialConsumo" />
                                            </div>
                                        </div>

                                        <div className="row mb-3">
                                            <div className="col-md-6 mb-3">
                                                <label for="complicaciones" className="form-label">Complicaciones</label>
                                                <select id="complicaciones" className="form-select" required>
                                                    <option value="" disabled selected>Selecciona Una Opcion...</option>
                                                    <option value="Hemorragia">Hemorragia</option>
                                                    <option value="Infección postoperatoria">Infección postoperatoria</option>
                                                    <option value="Complicaciones anestésicas">Complicaciones anestésicas</option>
                                                    <option value="Lesión de órganos">Lesión de órganos</option>
                                                    <option value="Reacción alérgica">Reacción alérgica</option>
                                                </select>
                                            </div>

                                            <div className="col-md-6">
                                                <label for="diagnosticoPostoperatorio" className="form-label">Diagnóstico Postoperatorio</label>
                                                <input type="text" className="form-control" id="diagnosticoPostoperatorio" />
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

export default Cirugia
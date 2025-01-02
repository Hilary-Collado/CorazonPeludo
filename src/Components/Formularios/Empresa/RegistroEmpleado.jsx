import React, { useState } from "react";
import Save from "../../Buttons/Save";
import Cancel from "../../Buttons/Cancel";
import Clear from "../../Buttons/Clear";

import '../../../App.css';
import '../../../App.scss';

import HeaderAdmin from "../../Menu/Header/HeaderAdmin/HeaderAdmin";
import Aside from "../../Menu/Aside/Aside";
import PageTitle from "../PageTitle";

const RegistroEmpleado = () => {
    const [registroEmpleado, setRegistroEmpleado] = useState({
        title: "registro de empleado",
    })

    const { title } = registroEmpleado
    return (
        <>
            <HeaderAdmin />
            <Aside />
            <main id="main" className="main">
                <PageTitle titulo={registroEmpleado} />
                <section className="section">
                    <div className="row">
                        <div className="col-lg-12">

                            <div className="card">
                                <div className="card-body">
                                    <h5 class="card-title titulo">{title}</h5>

                                    <form class="needs-validation" id="form" novalidate>

                                        <div class="row mb-3">
                                            <div class="col-md-6 mb-3">
                                                <label for="idEmpleado" class="form-label">ID Empleado</label>
                                                <input type="text" class="form-control" id="idEmpleado" disabled />
                                            </div>
                                        </div>

                                        <div class="row mb-3">
                                            <div class="col-md-6 mb-3">
                                                <label for="-name" class="form-label">Nombre</label>
                                                <input type="text" class="form-control" id="name" required />
                                            </div>

                                            <div class="col-md-6">
                                                <label for="apellido" class="form-label">Apellido</label>
                                                <input type="text" class="form-control" id="apellido" required />
                                            </div>
                                        </div>

                                        <div class="row mb-3">
                                            <div class="col-md-6 mb-3">
                                                <label for="email" class="form-label">Email</label>
                                                <input type="email" class="form-control" id="email" required />
                                            </div>

                                            <div class="col-md-6">
                                                <label for="fechaNacimiento" class="form-label">Fecha de Nacimiento</label>
                                                <input type="date" class="form-control" id="fechaNacimiento" required />
                                            </div>
                                        </div>

                                        {/* <!-- en este espacio estaba la cedula  --> */}
                                        <div class="row  mb-3">
                                            <div class="col-md-6 mb-3">

                                                <label for="tipoDocumento" class="form-label">Tipo de documentos de identificación</label>
                                                <select id="tipoDocumento" class="form-select" required>
                                                    <option value="" disabled selected>Selecciona Una Opcion...</option>
                                                    <option value="1">Cedula</option>
                                                    <option value="0">Pasaporte</option>
                                                </select>
                                            </div >

                                            <div class="col-md-6">
                                                <label for="documento" class="form-label">Documento</label>
                                                <input type="text" class="form-control" id="documento" />
                                            </div>
                                        </div >



                                        <div class="row mb-4">
                                            <div class="col-md-6 mb-3">
                                                <label for="estadocivil" class="form-label">Estado Civil</label>
                                                <select id="estadocivil" class="form-select" required>
                                                    <div id="data-display1">Selecciona Una Opcion...</div>
                                                </select>
                                            </div>
                                            <div class="col-md-6">
                                                <label for="tipoEmpleado" class="form-label">Tipo de Empleado</label>
                                                <select id="tipoEmpleado" class="form-select" required>
                                                    <div id="data-display">Selecciona Una Opcion...</div>
                                                </select>
                                            </div>
                                        </div>

                                        <div class="row mb-3" required>
                                            <div class="col-md-6 mb-3">
                                                <label for="sexo" class="form-label">Sexo</label>
                                                <select id="sexo" class="form-select" required>
                                                    <option value="" disabled selected>Selecciona Una Opcion...</option>
                                                    <option value="F">Femenino</option>
                                                    <option value="M">Masculino</option>
                                                </select>
                                            </div>
                                            <div class="col-md-6 mb-3">
                                                <label for="puestoLaboral" class="form-label">Puesto Laboral</label>
                                                <input type="text" class="form-control" id="puestoLaboral" required />
                                            </div>
                                        </div>

                                        <div class="row mb-3">
                                            <div class="col-md-6 mb-3">
                                                <label for="sueldo" class="form-label">Sueldo</label>
                                                <input type="number" class="form-control" id="sueldo" required />
                                            </div>
                                            <div class="col-md-6">
                                                <label for="fechIngreso" class="form-label">Fecha de Ingreso</label>
                                                <input type="date" id="fechaIngreso" class="form-control" />
                                            </div>
                                        </div>

                                        <div class="row mb-3">
                                            <div class="col-md-6 mb-3">
                                                <label for="direccion" class="form-label">Direccion</label>
                                                <input type="text" class="form-control" id="direccion" required />
                                            </div>
                                            <div class="col-md-6">
                                                <label for="ciudad" class="form-label">Ciudad</label>
                                                <input type="text" class="form-control" id="ciudad" required />
                                            </div>

                                        </div>

                                        <div class="row mb-3">
                                            <div class="col-md-6 mb-3">
                                                <label for="pais" class="form-label">Pais</label>
                                                <input type="text" class="form-control" id="pais" required />
                                            </div>
                                            <div class="col-md-6">
                                                <label for="codigoPostal" class="form-label">Codigo Postal</label>
                                                <input type="number" class="form-control" id="codigoPostal" required />
                                            </div>
                                        </div>


                                        <div class="row mb-3">
                                            <div class="col-md-6">
                                                <label for="selectlicencia" class="form-label">¿Tiene Licencia De Conducir?</label>
                                                <select id="selectlicencia" class="form-select" required onchange="activarLicencia()">
                                                    <option value="" disabled selected>Selecciona Una Opcion...</option>
                                                    <option value="1">Si</option>
                                                    <option value="0">No</option>
                                                </select>
                                            </div>

                                            <div class="col-md-6" id="campoLicencia">
                                                <label for="licencia" class="form-label">Licencia De Conducir</label>
                                                <input type="text" class="form-control" id="licencia" required />
                                            </div>
                                        </div>


                                        <div class="row mb-3">
                                            <div class="col-md-6 mb-3">
                                                <label for="foto" class="form-label">Foto del Empleado</label>
                                                <div class="col-sm-12">
                                                    <input class="form-control" type="file" id="foto" />
                                                </div>
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
                                    </form >
                                    {/* < !--End General Form Elements-- > */}


                                </div>
                            </div>

                        </div>

                    </div>
                </section>

            </main>

        </>
    )
}

export default RegistroEmpleado
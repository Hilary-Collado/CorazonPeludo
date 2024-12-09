import React, { useState } from "react";
import Save from "../../Buttons/Save";
import Cancel from "../../Buttons/Cancel";
import Clear from "../../Buttons/Clear";
import Close from "../../Buttons/Close";
import '../../../App.css';
import '../../../App.scss';


import HeaderAdmin from "../../Menu/Header/HeaderAdmin/HeaderAdmin";
import Aside from "../../Menu/Aside/Aside";
import PageTitle from "../PageTitle";

const RegistroDonante = () => {
    const [registroDonante, setRegistroDonante] = useState({
        title: "Ingreso de donante",
        donantePersona: "ingreso de persona como donante",
        donanteEmpresa: "ingreso de empresa como donante",
    })

    const { title, donantePersona, donanteEmpresa } = registroDonante

    return (
        <>
            <HeaderAdmin />
            <Aside />
            <main id="main" className="main">
                <PageTitle titulo={registroDonante} />
                <section className="section">
                    <div className="row">
                        <div className="col-lg-12">

                            <div className="card">
                                <div className="card-body">
                                    <h5 class="card-title titulo">{title}</h5>

                                    {/* General Form Elements  */}
                                    <form className="needs-validation" id="form" novalidate>
                                        <div className="text-center">
                                            <h5 className="card-title">¿Qué desea registrar?</h5>
                                        </div>

                                        {/* Button trigger modal */}
                                        <div className="text-center mb-3">
                                            <button type="button" className="btn btn-outline-primary buttonSubmit buttonRegistred"
                                                data-bs-toggle="modal" data-bs-target="#RegistroPersona"><i
                                                    className="bi bi-people"></i> Persona</button>

                                            <button type="button" className="btn btn-outline-success buttonRegistred"
                                                data-bs-toggle="modal" data-bs-target="#RegistroEmpresa"><i
                                                    className="ri-building-line"></i>
                                                Empresa</button>

                                        </div>


                                        {/* Modal REGISTRO DE PERSONAS COMO DONANTES */}
                                        <div className="modal fade" id="RegistroPersona" tabindex="-1"
                                            aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div className="modal-dialog modal-xl">
                                                <div className="modal-content">
                                                    
                                                    <div className="modal-header btnClose">
                                                        <h5 className="card-title titulo">{donantePersona}</h5>
                                                        <Close/>
                                                    </div>

                                                    <div className="modal-body">
                                                        <div className="card cardDonante">
                                                            <form className="needs-validation" id="form" novalidate>

                                                                <div className="row mb-3">
                                                                    <div className="col-md-6 mb-3">
                                                                        <label for="registro-donante-idPersona"
                                                                            className="form-label">ID Persona</label>
                                                                        <input type="text" className="form-control"
                                                                            id="registro-donante-idPersona" disabled />
                                                                    </div>

                                                                    <div className="col-md-6">
                                                                        <label for="mySelect" className="form-label">Tipo de
                                                                            Persona</label>
                                                                        <select id="mySelect" className="form-select" required>
                                                                            <div id="data-display">Selecciona Una Opcion...</div>
                                                                        </select>
                                                                    </div>
                                                                </div>

                                                                <div className="row mb-3">
                                                                    <div className="col-md-6 mb-3">
                                                                        <label for="registro-donante-name"
                                                                            className="form-label">Nombre</label>
                                                                        <input type="text" className="form-control"
                                                                            id="registro-donante-name" required />
                                                                    </div>

                                                                    <div className="col-md-6">
                                                                        <label for="registro-donante-apellido"
                                                                            className="form-label">Apellido</label>
                                                                        <input type="text" className="form-control"
                                                                            id="registro-donante-apellido" required />
                                                                    </div>
                                                                </div>

                                                                <div className="row mb-3">
                                                                    <div className="col-md-6 mb-3">
                                                                        <label for="registro-donante-email"
                                                                            className="form-label">Email</label>
                                                                        <input type="email" className="form-control"
                                                                            id="registro-donante-email" required />
                                                                    </div>

                                                                    <div className="col-md-6">
                                                                        <label for="registro-donante-fechaNacimiento"
                                                                            className="form-label">Fecha De Nacimiento</label>
                                                                        <input type="fechaNacimiento" className="form-control"
                                                                            id="registro-donante-fechaNacimiento" required />
                                                                    </div>
                                                                </div>

                                                                <div className="row mb-4">
                                                                    <div className="col-md-6 mb-3">
                                                                        <label for="registro-donante-cedula"
                                                                            className="form-label">Cedula o Pasaporte</label>
                                                                        <input type="text" className="form-control"
                                                                            id="registro-donante-cedula" />
                                                                    </div>

                                                                    <div className="col-md-6">
                                                                        <label for="mySelect" className="form-label">Estado
                                                                            Civil</label>
                                                                        <select id="mySelect" className="form-select" required>
                                                                            <div id="data-display0">Selecciona Una Opcion...</div>
                                                                        </select>
                                                                    </div>

                                                                </div>



                                                                <div className="row mb-3" required>
                                                                    <div className="col-md-6 mb-3">
                                                                        <label for="mySelect" className="form-label">Sexo</label>
                                                                        <select id="mySelect" className="form-select" required>
                                                                            <option value="" disabled selected>Selecciona Una Opcion...</option>
                                                                            <option value="F">Femenino</option>
                                                                            <option value="M">Masculino</option>
                                                                        </select>
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <label for="registro-donante-direccion"
                                                                            className="form-label">Direccion</label>
                                                                        <input type="text" className="form-control"
                                                                            id="registro-donante-direccion" required />
                                                                    </div>
                                                                </div>


                                                                <div className="row mb-3">
                                                                    <div className="col-md-6 mb-3">
                                                                        <label for="registro-donante-ciudad"
                                                                            className="form-label">Ciudad</label>
                                                                        <input type="text" className="form-control"
                                                                            id="registro-donante-ciudad" required />
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <label for="registro-donante-pais"
                                                                            className="form-label">Pais</label>
                                                                        <input type="text" className="form-control"
                                                                            id="registro-donante-pais" required />
                                                                    </div>
                                                                </div>

                                                                <div className="row mb-3">
                                                                    <div className="col-md-6 mb-3">
                                                                        <label for="registro-direccion-codigoPostal"
                                                                            className="form-label">Codigo Postal</label>
                                                                        <input type="number" className="form-control"
                                                                            id="registro-direccion-codigoPostal" required />
                                                                    </div>

                                                                    <div className="col-md-6">
                                                                        <label for="registro-donante-licencia"
                                                                            className="form-label">Licencia De Conducir</label>
                                                                        <input type="text" className="form-control"
                                                                            id="registro-donante-licencia" required />
                                                                    </div>
                                                                </div>

                                                                <div className="row mb-3">
                                                                    <div className="col-md-6 mb-3">
                                                                        <label for="registro-donante-foto"
                                                                            className="form-label">Foto Del Donante</label>
                                                                        <div className="col-sm-12">
                                                                            <input className="form-control" type="file"
                                                                                id="registro-donante-foto" />
                                                                        </div>
                                                                    </div>
                                                                </div>



                                                                <div className="row mb-5">
                                                                    <div className="col-md-6 mb-3">
                                                                        <label for="mySelect" className="form-label">Status</label>
                                                                        <select id="mySelect" className="form-select" required>
                                                                            <option value="" disabled selected>Selecciona Una Opcion...</option>
                                                                            <option value="1">Activo</option>
                                                                            <option value="0">Inactivo</option>
                                                                        </select>
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <label for="registro-donante-fechaModificacion"
                                                                            className="form-label">Fecha de Modificacion</label>
                                                                        <input type="date" id="registro-donante-fechaModificacion" className="form-control" disabled />
                                                                    </div>
                                                                </div>




                                                            </form>
                                                            {/* End General Form Elements */}

                                                        </div>
                                                    </div>

                                                    <div className="modal-footer">
                                                        <div className="text-center  mb-3">
                                                            <Save />
                                                            <Clear />
                                                            <Cancel />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* fin Modal  */}


                                        {/* Modal REGISTRO DE EMPRESA COMO DONANTES  */}
                                        <div className="modal fade" id="RegistroEmpresa" tabindex="-1"
                                            aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div className="modal-dialog modal-lg">
                                                <div className="modal-content">
                                                    <div className="modal-header btnClose">
                                                        <h5 className="card-title titulo">{donanteEmpresa}</h5>

                                                        <Close/>
                                                    </div>
                                                    <div className="modal-body">
                                                        <div className="card cardDonante">

                                                            <form className="needs-validation" id="form" novalidate>

                                                                <div className="row mb-3">
                                                                    <div className="col-md-6 mb-3">
                                                                        {/* LE COLOQUE ID EMPRESA, SIN EMBARGO ES EL ID PERSON LO QUE VA AQUI */}
                                                                        <label for="registro-donante-idEmpresa"
                                                                            className="form-label">ID Empresa</label>
                                                                        <input type="text" className="form-control"
                                                                            id="registro-donante-idEmpresa" disabled />
                                                                    </div>


                                                                </div>

                                                                <div className="row mb-3">
                                                                    <div className="col-md-6 mb-3">
                                                                        <a href="../enums/registroTipoEmpresa.html">Crear nueva</a>
                                                                        <label for="" className="form-label">Tipo de
                                                                            Empresa</label>
                                                                        <select id="" className="form-select" required>
                                                                            <div id="data-display0">Selecciona Una Opcion...</div>
                                                                        </select>
                                                                    </div>

                                                                    <div className="col-md-6">
                                                                        <label for="registro-donante-nameaEmpresa" className="form-label">Nombre De La
                                                                            Empresa</label>
                                                                        <input type="text" className="form-control"
                                                                            id="registro-donante-nameEmpresa" required />
                                                                    </div>
                                                                </div>

                                                                <div className="row mb-3">
                                                                    <div className="col-md-6 mb-3">
                                                                        <label for="registro-donante-RNC"
                                                                            className="form-label">RNC</label>
                                                                        <input type="text" className="form-control"
                                                                            id="registro-donante-RNC" required />
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <label for="registro-donante-email"
                                                                            className="form-label">Email</label>
                                                                        <input type="email" className="form-control"
                                                                            id="registro-donante-email" required />
                                                                    </div>

                                                                </div>

                                                                <div className="row mb-3">
                                                                    <div className="col-md-6 mb-3">
                                                                        <label for="registro-donante-direccionEmpresa"
                                                                            className="form-label">Direccion</label>
                                                                        <input type="text" className="form-control"
                                                                            id="registro-donante-direccionEmpresa" required />
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <label for="registro-donante-ciudadEmpresa"
                                                                            className="form-label">Ciudad</label>
                                                                        <input type="text" className="form-control"
                                                                            id="registro-donante-ciudadEmpresa" required />
                                                                    </div>
                                                                </div>

                                                                <div className="row mb-3">
                                                                    <div className="col-md-6 mb-3">
                                                                        <label for="registro-donante-paisEmpresa"
                                                                            className="form-label">Pais</label>
                                                                        <input type="text" className="form-control"
                                                                            id="registro-donante-paisEmpresa" required />
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <label for="registro-donante-codigoPostalEmpresa"
                                                                            className="form-label">Codigo Postal</label>
                                                                        <input type="number" className="form-control"
                                                                            id="registro-donante-codigoPostalEmpresa" required />
                                                                    </div>
                                                                </div>

                                                                <div className="row mb-5">
                                                                    <div className="col-md-6 mb-3">
                                                                        <label for="status" className="form-label">Status</label>
                                                                        <select id="status" className="form-select" required>
                                                                            <option value="" disabled selected>Selecciona Una Opcion...</option>
                                                                            <option value="1">Activo</option>
                                                                            <option value="0">Inactivo</option>
                                                                        </select>
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <label for="registro-donante-fechaModificacionEmpresa" className="form-label">Fecha de Modificacion</label>
                                                                        <input type="date" id="registro-donante-fechaModificacionEmpresa" className="form-control" disabled />
                                                                    </div>
                                                                </div>

                                                            </form>
                                                            {/* End General Form Elements */}

                                                        </div>

                                                    </div>

                                                    {/* BOTONES  */}

                                                    <div className="modal-footer">
                                                        <div className="text-center  mb-3">
                                                            <Save />
                                                            <Clear />
                                                            <Cancel  />
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        {/* fin Modal */}

                                    </form>
                                    {/* End General Form Elements */}


                                </div>
                            </div>

                        </div>

                    </div>
                </section>

            </main>
        </>
    )
}

export default RegistroDonante
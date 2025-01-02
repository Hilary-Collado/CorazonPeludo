import React, { useState } from "react";
import Save from "../../Buttons/Save";
import Cancel from "../../Buttons/Cancel";
import Clear from "../../Buttons/Clear";

import PageTitle from "../PageTitle";
import HeaderAdmin from "../../Menu/Header/HeaderAdmin/HeaderAdmin";
import Aside from "../../Menu/Aside/Aside";
import '../../../App.css';
import '../../../App.scss';



const RegistroProveedores = () => {
    const [registroProveedores, setRegistroProveedores] = useState({
        title: " Ingreso de proveedores ",
    })

    const { title } = registroProveedores

    const mostrarCampos = () => {
        if (document.getElementById("persona").checked) {
            document.getElementById("campoCedula").style.display = "block";
            document.getElementById("campodoc").style.display = "block";
            document.getElementById("campoNombre").style.display = "block";
            document.getElementById("campoApellido").style.display = "block";
            document.getElementById("campoGenero").style.display = "block";
            document.getElementById("campoFechaN").style.display = "block";

            document.getElementById("campoRNC").style.display = "none";
            document.getElementById("campoNombreCompania").style.display = "none";
            document.getElementById("campoPersonaContacto").style.display = "none";
            document.getElementById("campoCargo").style.display = "none";

        } else if (document.getElementById("compania").checked) {
            document.getElementById("campoCedula").style.display = "none";
            document.getElementById("campodoc").style.display = "none";
            document.getElementById("campoNombre").style.display = "none";
            document.getElementById("campoApellido").style.display = "none";
            document.getElementById("campoGenero").style.display = "none";
            document.getElementById("campoFechaN").style.display = "none";

            document.getElementById("campoRNC").style.display = "block";
            document.getElementById("campoNombreCompania").style.display = "block";
            document.getElementById("campoPersonaContacto").style.display = "block";
            document.getElementById("campoCargo").style.display = "block";

        }
    }

    return (
        <>
            <HeaderAdmin />
            <Aside />

            <main id="main" class="main">
                <PageTitle titulo={registroProveedores} />
                <section className="section">
                    <div className="row">
                        <div className="col-lg-12">

                            <div className="card">
                                <div className="card-body">
                                    <h5 class="card-title titulo">{title}</h5>
                                    <form class="needs-validation" id="form" novalidate>

                                        <div class="row mb-3">
                                            <div class="col-md-6 mb-3">
                                                <label for="idProveedor" class="form-label">ID Proveedor</label>
                                                <input type="text" class="form-control" id="idProveedor" disabled />
                                            </div>

                                            <fieldset class="col-md-6 mb-3">
                                                <legend class="col-form-label col-sm-5 pt-0 mb-3" for="tipoProveedor">Tipo de Proveedor</legend>
                                                <div class="col-sm-10">
                                                    <div class="form-check form-check-inline">
                                                        <input class="form-check-input" type="radio" name="tipoProveedor" id="persona" value="persona" onClick={mostrarCampos} checked />
                                                        <label class="form-check-label" for="persona">
                                                            Persona
                                                        </label>
                                                    </div>

                                                    <div class="form-check form-check-inline">
                                                        <input class="form-check-input" type="radio" name="tipoProveedor" id="compania" value="compania" onClick={mostrarCampos} />
                                                        <label class="form-check-label" for="compania">
                                                            Compañia
                                                        </label>
                                                    </div>
                                                </div>
                                            </fieldset>
                                        </div>

                                        <div class="row mb-3">
                                            <div class="col-md-6 mb-3" id="campoNombre">
                                                <label for="nombre" class="form-label">Nombre</label>
                                                <input type="text" class="form-control" id="nombre" required />
                                            </div>

                                            <div class="col-md-6" id="campoApellido">
                                                <label for="apellido" class="form-label">Apellido</label>
                                                <input type="text" class="form-control" id="apellido" required />
                                            </div>

                                        </div>

                                        {/* <!-- CAMPOS DE COMPAÑIA  --> */}
                                        <div class="row mb-3">
                                            <div class="col-md-6  mb-3" id="campoNombreCompania">
                                                <label for="nombreCompania" class="form-label">Nombre de la Compañia</label>
                                                <input type="text" class="form-control" id="nombreCompania" required />
                                            </div>

                                            <div class="col-md-6" id="campoRNC">
                                                <label for="rnc" class="form-label">RNC</label>
                                                <input type="text" class="form-control" id="rnc" required />
                                            </div>
                                        </div>

                                        {/* <!-- CAMPOS DE PERSONA  --> */}
                                        <div class="row mb-3">
                                            <div class="col-md-6 mb-3" id="campodoc">
                                                <label for="mySelect" class="form-label">Tipo de Documento</label>
                                                <select id="mySelect" class="form-select" required>
                                                    <option value="cedula">Cedula o DNI</option>
                                                    <option value="pasaporte">Pasaporte</option>
                                                    <option value="rnc">RNC</option>
                                                </select>
                                            </div>

                                            <div class="col-md-6 mb-3" id="campoCedula">
                                                <label for="documento" class="form-label">Numero de Documento</label>
                                                <input type="text" class="form-control" id="documento" required />
                                            </div>
                                        </div>

                                        <div class="row mb-3">
                                            <div class="col-md-6 mb-3" id="campoGenero">
                                                <label for="mySelect" class="form-label">Sexo</label>
                                                <select id="mySelect" class="form-select" required>
                                                    <option value="" disabled selected>Selecciona Una Opcion...</option>
                                                    <option value="F">Femenino</option>
                                                    <option value="M">Masculino</option>
                                                </select>
                                            </div>

                                            <div class="col-md-6 mb-3" id="campoFechaN">
                                                <label for="fechaNacimiento" class="form-label">Fecha de Nacimiento</label>
                                                <input type="date" class="form-control" id="fechaNacimiento" required />
                                            </div>
                                        </div>

                                        <div class="row mb-3">
                                            <div class="col-md-6 mb-3">
                                                <label for="direccion" class="form-label">Direccion ver</label>
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
                                            <div class="col-md-6 mb-3">
                                                <label for="telefono" class="form-label">Numero de Telefono</label>
                                                <input type="number" class="form-control" id="telefono" required />
                                            </div>

                                            <div class="col-md-6">
                                                <label for="email" class="form-label">Email</label>
                                                <input type="email" class="form-control" id="email" required />
                                            </div>

                                        </div>
                                        {/* 
                                        <div class="row mb-3">
                                            <div class="col-md-6 mb-3" id="campoPersonaContacto" style="display: none;">
                                                <label for="personaContacto" class="form-label">Persona de Contacto</label>
                                                <input type="text" class="form-control" id="personaContacto" required/>
                                            </div>

                                            <div class="col-md-6" id="campoCargo" style="display: none;">
                                                <label for="cargo" class="form-label">Cargo</label>
                                                <input type="text" class="form-control" id="cargo" required/>
                                            </div>

                                        </div> */}

                                        <div class="row mb-3">

                                            <div class="col-md-6">
                                                <label for="tipoCredito" class="form-label">Tipo de Credito</label>
                                                <input type="text" class="form-control" id="tipoCredito" required />
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

export default RegistroProveedores;
import React from "react";
import Save from "../../Buttons/Save";
import Cancel from "../../Buttons/Cancel";
import Clear from "../../Buttons/Clear";
import Footer from "../../Footer/Footer";

const RegistroUsuario = () => {
    return (
        <>
            <h3 class="card-title">Ingreso De Usuarios</h3>

            <form class="needs-validation" method="post" enctype="multipart/form-data" action="../../src/js/api/admin/usuario.js" id="form" novalidate >

                <div class="row mb-3">
                    <div class="col-md-6">
                        <label for="idUser" class="form-label">ID Usuario</label>
                        <input type="text" class="form-control" id="idUser" disabled />
                    </div>
                </div>

                <div class="row mb-3">
                    <div class="col-md-6">
                        <label for="formFile" class="col-form-label">Imagen de Usuario</label>
                        <div class="col-sm-12">
                            <input class="form-control" type="file" id="formFile" />
                        </div>
                    </div>

                    <div class="col-md-6">
                        {/* <a href="../enums/registroTipoUsuario.html">Crear nuevo</a> */}
                        <label for="tipoUser" class="form-label">Tipo de usuario</label>
                        <select id="tipoUser" class="form-select" required>
                            <div id="data-display">Selecciona Una Opcion...</div>
                        </select>
                    </div>
                </div>


                <div class="row mb-3">
                    <div class="col-md-6">
                        <label for="user" class="form-label">Nombre de Usuario</label>
                        <input type="text" class="form-control" id="user" required />
                    </div>
                    <div class="col-md-6">
                        <label for="password" class="form-label">Contraseña</label>
                        <input type="password" class="form-control" id="password" required />
                    </div>
                </div>


                <div class="row mb-3">
                    <div class="col-md-6">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" id="email" required />
                    </div>
                    <div class="col-md-6">
                        <label for="sucursal" class="form-label">Sucursal</label>
                        <input type="text" class="form-control" id="sucursal" required />
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
        </>
    )
}

export default RegistroUsuario;


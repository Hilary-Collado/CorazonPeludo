import React from "react";
import Save from "../../Buttons/Save";
import Cancel from "../../Buttons/Cancel";
import Clear from "../../Buttons/Clear";
import Footer from "../../Footer/Footer";

const RegistroSucursal = () => {
    return (
        <>
            <h5 class="card-title">Ingreso de Sucursal</h5>

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
                        <a href="../tercero/">Crear nueva</a>
                        <label for="compania" class="form-label">Compania</label>
                        <select id="compania" class="form-select" required>
                            <div id="data-display">Selecciona Una Opcion...</div>
                        </select>
                    </div>
                </div>


                <div class="row mb-3">
                    <div class="col-md-6">
                        <label for="rnc" class="form-label">RNC</label>
                        <input type="text" class="form-control" id="rnc" disabled />
                    </div>
                </div>

                <div class="row mb-3">
                    <div class="col-md-6 mb-3">
                        <label for="tipoEmpresa" class="form-label">Tipo empresa</label>
                        <input type="text" class="form-control" id="tipoEmpresa" disabled />
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

        </>
    )
}
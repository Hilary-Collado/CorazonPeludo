import React from "react";
import Save from "../../Buttons/Save";
import Cancel from "../../Buttons/Cancel";
import Clear from "../../Buttons/Clear";
import Footer from "../../Footer/Footer";

const RegistroAlimento = () => {
    return (
        <>
            <h3 class="card-title">Ingreso De Alimentos</h3>

            <form class="needs-validation" id="form" novalidate>

                <div class="row mb-3">
                    <div class="col-md-6 mb-3">
                        <label for="idAlimentos" class="form-label">ID Alimento</label>
                        <input type="text" class="form-control" id="idAlimentos" disabled />
                    </div>
                </div>


                <div class="row mb-3">
                    <div class="col-md-6 mb-3">
                        <label for="nombre" class="form-label">Nombre</label>
                        <input type="text" class="form-control" id="nombre" required />
                    </div>
                    <div class="col-md-6">
                        <label for="lote" class="form-label">Lote</label>
                        <input type="text" class="form-control" id="lote" required />
                    </div>
                </div>


                <div class="row mb-3">
                    <div class="col-md-6 mb-3">
                        <a href="../enums/registroMarca.html">Crear nueva</a>
                        <label for="marca" class="form-label">Marca</label>
                        <select id="marca" class="form-select" required>
                            <div id="data-display1">Selecciona Una Opcion...</div>
                        </select>
                    </div>

                    <div class="col-md-6">
                        <label for="costo" class="form-label">Costo</label>
                        <input type="number" class="form-control" id="costo" required />
                    </div>
                </div>

                <div class="row mb-3">
                    <div class="col-md-6 mb-3">
                        <label for="tipoAlimento" class="form-label">Tipo De Alimentos</label>
                        <select id="tipoAlimento" class="form-select" required>
                        </select>
                    </div>

                    <div class="col-md-6">
                        <label for="contenido" class="form-label">Contenido</label>
                        <input type="text" class="form-control" id="contenido" required />
                    </div>

                </div>

                <div class="row mb-3">
                    <div class="col-md-6 mb-3">
                        <label for="unidadMedida" class="form-label">Unidad De Medida</label>
                        <select id="unidadMedida" class="form-select" required>
                            <option value="" disabled selected>Selecciona Una Opcion...</option>
                            <option value="lb">libras</option>
                            <option value="gr">gramos</option>
                            <option value="onz">onzas</option>
                            <option value="kg">kilogramos</option>
                        </select>
                    </div>

                    <div class="col-md-6">
                        <label for="fechaVencimiento" class="form-label">Fecha De Vencimiento</label>
                        <input type="date" id="fechaVencimiento" class="form-control" required />
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

export default RegistroAlimento;
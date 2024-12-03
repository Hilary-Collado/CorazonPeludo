import React from "react";
import Save from "../../Buttons/Save";
import Cancel from "../../Buttons/Cancel";
import Clear from "../../Buttons/Clear";
import Footer from "../../Footer/Footer";

const RegistroEstadoLugar = () => {
    return (
        <>
            <h5 class="card-title">Registro De Estado del Lugar</h5>

            {/* <!-- General Form Elements --> */}
            <form class="needs-validation" id="form" novalidate>

                <div class="row mb-3">
                    <div class="col-md-6 mb-3">
                        <label for="idEstadoLugar" class="form-label">ID del Estado del Lugar</label>
                        <input type="text" class="form-control" id="idEstadoLugar" disabled />
                    </div>

                    <div class="col-md-6">
                        <label for="descripcion" class="form-label">Descripcion</label>
                        <input type="text" class="form-control" id="descripcion" required />
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

                <div class="text-center mb-3">
                    <button type="submit" class="btn btn-primary buttonSubmit">Enviar</button>
                    <button type="reset" class="btn btn-outline-danger">Limpiar</button>
                </div>

            </form>
            {/* <!-- End General Form Elements --> */}

        </>
    )
}

export default RegistroEstadoLugar
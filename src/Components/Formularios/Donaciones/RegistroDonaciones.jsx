import React from "react";
import Save from "../../Buttons/Save";
import Cancel from "../../Buttons/Cancel";
import Clear from "../../Buttons/Clear";
import Footer from "../../Footer/Footer";

const RegistroDonaciones = () => {
    return (
        <>

            <h3 class="card-title">Ingreso De Donaciones</h3>

            <form class="needs-validation" id="form" novalidate>

                <div class="row mb-3">
                    <div class="col-md-6 mb-3">
                        <label for="idEspecie" class="form-label">ID Donacion</label>
                        <input type="text" class="form-control" id="idEspecie" disabled />
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
                <div className="buttons row mb-4">
                    <section className="col-md-1"><Save /></section>
                    <section className="col-md-1"><Clear /></section>
                    <section className="col-md-1"><Cancel /></section>
                </div>

                <Footer />

            </form>
        </>
    )
}
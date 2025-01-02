import React, { useState } from "react";
import Save from "../../Buttons/Save";
import Cancel from "../../Buttons/Cancel";
import Clear from "../../Buttons/Clear";
import PageTitle from "../PageTitle";
import HeaderAdmin from "../../Menu/Header/HeaderAdmin/HeaderAdmin";
import Aside from "../../Menu/Aside/Aside";
import '../../../App.css';
import '../../../App.scss';


const RegistroAlmacen = () => {
    const [RegistroAlmacen, setTitulo] = useState({
        title: "ingreso en almacen",
    })

    const { title } = RegistroAlmacen

    return (
        <>
            <HeaderAdmin />
            <Aside />
            <main id="main" className="main">
                <PageTitle titulo={RegistroAlmacen} />
                <section className="section">
                    <div className="row">
                        <div className="col-lg-12">

                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title titulo">{title}</h5>

                                    <form class="needs-validation" id="form" novalidate>

                                        <div class="row mb-3">
                                            <div class="col-md-6 mb-3">
                                                <label for="idAlmacen" class="form-label">ID Almacen</label>
                                                <input type="text" class="form-control" id="idAlmacen" disabled />
                                            </div>

                                            <div class="col-md-6">
                                                <a href="../tercero/registroSucursal.html">Crear nueva</a>
                                                <label for="sucursal" class="form-label">Sucursal</label>
                                                <select id="sucursal" class="form-select" required>
                                                    <div id="data-display">Selecciona Una Opcion...</div>
                                                </select>
                                            </div>
                                        </div>


                                        <div class="row mb-3">
                                            <div class="col-md-6 mb-3">
                                                <label for="tipoAlmacen" class="form-label">Tipo De Almacen</label>
                                                <select id="tipoAlmacen" class="form-select" required>
                                                    <option value="" disabled selected>Selecciona Una Opcion...</option>
                                                    <option value="Alimento">Alimento</option>
                                                    <option value="Medicina">Medicina</option>
                                                    <option value="Productos de limpieza">Productos de limpieza</option>
                                                    <option value="Combustible">Combustible</option>
                                                </select>
                                            </div>
                                            <div class="col-md-6 mb-3">
                                                <label for="capacidad" class="form-label">Capacidad</label>
                                                <input type="text" class="form-control" id="capacidad" required />
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
export default RegistroAlmacen;
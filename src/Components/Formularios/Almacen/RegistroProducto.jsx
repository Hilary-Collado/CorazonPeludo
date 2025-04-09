import React, { useState } from "react";
import Save from "../../Buttons/Save";
import Cancel from "../../Buttons/Cancel";
import Clear from "../../Buttons/Clear";
import PageTitle from "../../ComponentesRepetitivos/PageTitle";
import HeaderAdmin from "../../Menu/Header/HeaderAdmin/HeaderAdmin";
import Aside from "../../Menu/Aside/Aside";
import '../../../App.css';
import '../../../App.scss';

const RegistroProducto = () => {
    const [registroProducto, setRegistroProducto] = useState({
        title: " Ingreso de productos ",
    })

    const { title } = registroProducto

    return (
        <>
            <HeaderAdmin />
            <Aside />
            <main id="main" className="main">
                <PageTitle titulo={registroProducto} />
                <section className="section">
                    <div className="row">
                        <div className="col-lg-12">

                            <div className="card">
                                <div className="card-body">
                                    <h5 class="card-title titulo">{title}</h5>

                                    <form class="needs-validation" novalidate>

                                        <div class="row mb-3">
                                            <div class="col-md-6 mb-3">
                                                <label for="idProducto" class="form-label">ID Producto</label>
                                                <input type="text" class="form-control" id="idProducto" disabled />
                                            </div>
                                        </div>

                                        <div class="row mb-3">
                                            <div class="col-md-6">
                                                <label for="nombre" class="form-label">Nombre</label>
                                                <input type="text" class="form-control" id="nombre" required />
                                            </div>
                                            <div class="col-md-6">
                                                <label for="lote" class="form-label">Lote</label>
                                                <input type="text" class="form-control" id="lote" required />
                                            </div>
                                        </div>

                                        <div class="row mb-3">
                                            <div class="col-md-6">
                                                <label for="marca" class="form-label">Marca</label>
                                                <input type="text" class="form-control" id="marca" required />
                                            </div>


                                            <div class="col-md-6">
                                                <label for="costo" class="form-label">Costo</label>
                                                <input type="number" class="form-control" id="costo" required />
                                            </div>
                                        </div>

                                        <div class="row mb-3">
                                            <div class="col-md-6 mb-3">
                                                <label for="tipoProducto" class="form-label">Tipo de Producto</label>
                                                <input type="text" class="form-control" id="tipoProducto" required />
                                            </div>

                                            <div class="col-md-6">
                                                <label for="fechaVencimiento" class="form-label">Fecha De Vencimiento</label>
                                                <input type="date" id="fechaVencimiento" class="form-control" required />
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

export default RegistroProducto;
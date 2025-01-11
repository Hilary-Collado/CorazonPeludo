import React, { useState } from "react";
import Save from "../../Buttons/Save";
import Cancel from "../../Buttons/Cancel";
import Clear from "../../Buttons/Clear";

import '../../../App.css';
import '../../../App.scss';

import HeaderAdmin from "../../Menu/Header/HeaderAdmin/HeaderAdmin";
import Aside from "../../Menu/Aside/Aside";
import PageTitle from "../../ComponentesRepetitivos/PageTitle";

const RegistroCompanhia = () => {
    const [registroCompania, setRegistroCompania] = useState({
        title: "Ingreso de compañia",
    })

    const { title } = registroCompania
    return (
        <>
            <HeaderAdmin />
            <Aside />
            <main id="main" className="main">
                <PageTitle titulo={registroCompania} />
                <section className="section">
                    <div className="row">
                        <div className="col-lg-12">

                            <div className="card">
                                <div className="card-body">
                                    <h5 class="card-title titulo">{title}</h5>


                                    {/* <!-- General Form Elements --> */}
                                    <form class="needs-validation" id="form" novalidate>

                                        <div class="row mb-3">
                                            <div class="col-md-6 mb-3">
                                                <label for="idCompañia" class="form-label">ID Compañia</label>
                                                <input type="text" class="form-control" id="idCompañia" disabled />
                                            </div>
                                        </div>

                                        <div class="row mb-3">
                                            <div class="col-md-6">
                                                <label for="nombre" class="form-label">Nombre</label>
                                                <input type="text" class="form-control" id="nombre" required />
                                            </div>

                                            <div class="col-md-6">
                                                <label for="rnc" class="form-label">RNC</label>
                                                <input type="text" class="form-control" id="rnc" disabled />
                                            </div>
                                        </div>

                                        <div class="row mb-3">
                                            <div class="col-md-6 mb-3">
                                                <label for="tipoEmpresa" class="form-label">Tipo empresa</label>
                                                <input type="text" class="form-control" id="tipoEmpresa" />
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
                                    {/* <!-- End General Form Elements --> */}

                                </div>
                            </div>

                        </div>

                    </div>
                </section>

            </main>

        </>
    )
}

export default RegistroCompanhia
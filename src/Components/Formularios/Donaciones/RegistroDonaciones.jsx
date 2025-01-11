import React, { useState } from "react";
import Save from "../../Buttons/Save";
import Cancel from "../../Buttons/Cancel";
import Clear from "../../Buttons/Clear";
import HeaderAdmin from "../../Menu/Header/HeaderAdmin/HeaderAdmin";
import Aside from "../../Menu/Aside/Aside";
import PageTitle from "../../ComponentesRepetitivos/PageTitle";
import '../../../App.css';
import '../../../App.scss';


const RegistroDonaciones = () => {
    const [registroDonaciones, setRegistroDonaciones] = useState({
        title: "Ingreso de donaciones",
    })

    const { title } = registroDonaciones

    return (
        <>
            <HeaderAdmin />
            <Aside />
            <main id="main" className="main">
                <PageTitle titulo={registroDonaciones} />
                <section className="section">
                    <div className="row">
                        <div className="col-lg-12">

                            <div className="card">
                                <div className="card-body">
                                    {/* <h5 className="card-title">Ingreso De Animales</h5> */}
                                    <h5 class="card-title titulo">{title}</h5>

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

export default RegistroDonaciones
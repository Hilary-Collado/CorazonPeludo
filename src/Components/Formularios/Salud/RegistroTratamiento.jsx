import React, {useState} from "react";
import Save from "../../Buttons/Save";
import Cancel from "../../Buttons/Cancel";
import Clear from "../../Buttons/Clear";
import '../../../App.css';
import '../../../App.scss';

import HeaderAdmin from "../../Menu/Header/HeaderAdmin/HeaderAdmin";
import Aside from "../../Menu/Aside/Aside";
import PageTitle from "../../ComponentesRepetitivos/PageTitle";

import Status from "../../ComponentesRepetitivos/Status";
import FechaModificacion from "../../ComponentesRepetitivos/FechaModificacion";
import Selector from "../../ComponentesRepetitivos/Selector";

const RegistroTratamiento = () => {
    const [registroTratamiento, setRegistroTratamiento] = useState({
        title: "registro de tratamiento",
    })

    const { title } = registroTratamiento

    return (
        <>
            <HeaderAdmin />
            <Aside />

            <main id="main" className="main">

                <PageTitle titulo={registroTratamiento} />

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
                                                <label for="idEnfermedad" class="form-label">ID Enfermedad</label>
                                                <input type="text" class="form-control" id="idEnfermedad" disabled />
                                            </div>

                                        </div>

                                        <div class="row mb-3">
                                            <div class="col-md-6 mb-3">
                                                <label for="nombre" class="form-label">Nombre</label>
                                                <input type="text" class="form-control" id="nombre" required />
                                            </div>
                                            <div class="col-md-6">
                                                {/* <a href="../enums/registroTipoTarea.html">Crear nueva</a> */}
                                                <label for="tipoEnfermedad" class="form-label">Tipo de tratamiento</label>
                                                <Selector />
                                            </div>
                                        </div>

                                        <div class="row mb-3">
                                            <div class="col-md-6 mb-3">
                                                <label for="prevalencia" class="form-label">Prevalencia</label>
                                                <input type="text" class="form-control" id="prevalencia" required />
                                            </div>
                                            <div class="col-md-6">
                                                <label for="porcientoMortalidad" class="form-label">Porciento de Mortalidad</label>
                                                <input type="number" class="form-control" id="porcientoMortalidad" required />
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

export default RegistroTratamiento
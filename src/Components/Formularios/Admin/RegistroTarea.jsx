import React, { useState } from "react";
import Save from "../../Buttons/Save";
import Cancel from "../../Buttons/Cancel";
import Clear from "../../Buttons/Clear";
import HeaderAdmin from '../../Menu/Header/HeaderAdmin/HeaderAdmin'
import Aside from "../../Menu/Aside/Aside";
import CardBase from "../CardBase";
import '../../../App.css';


const RegistroTarea = () => {

    const [titulo, setTitulo] = useState({
        title: "Registro de Tareas",
    })
    
    const { title } = titulo

    return (
        <>
            <HeaderAdmin />
            <Aside />

            <main id="main" className="main">

                <CardBase titulo={titulo} />

                <section className="section">
                    <div className="row">
                        <div className="col-lg-12">

                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{title}</h5>

                                    <form className="needs-validation" id="form" novalidate>

                                        <div className="row mb-3">
                                            <div className="col-md-6 mb-3">
                                                <label for="idTareas" className="form-label">Id Tareas</label>
                                                <input type="text" className="form-control" id="idTareas" disabled />
                                            </div>
                                            <div className="col-md-6">
                                                <label for="descripcion" className="form-label">Descripción</label>
                                                <input type="text" className="form-control" id="descripcion" required />
                                            </div>
                                        </div>

                                        <div className="row mb-3">
                                            <div className="col-md-6 mb-3">
                                                {/* <a href="../enums/registroTipoTarea.html">Crear nuevo</a> */}
                                                <label for="tipoTarea" className="form-label">Tipo Tarea</label>
                                                <select id="tipoTarea" className="form-select" required>
                                                    <div id="data-display">Selecciona Una Opcion...</div>
                                                </select>
                                            </div>
                                            <div className="col-md-6">
                                                {/* <a href="../enums/registroComplejidad.html">Crear nuevo</a> */}
                                                <label for="complejidad" className="form-label">Complejidad</label>
                                                <select id="complejidad" className="form-select" required>
                                                    <div id="data-display1">Selecciona Una Opcion...</div>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="row mb-5">
                                            <div className="col-md-6 mb-3">
                                                <label for="status" className="form-label">Status</label>
                                                <select id="status" className="form-select" required>
                                                    <option value="" disabled selected>Selecciona Una Opcion...</option>
                                                    <option value="1">Activo</option>
                                                    <option value="0">Inactivo</option>
                                                </select>
                                            </div>
                                            <div className="col-md-6">
                                                <label for="fechaModificacion" className="form-label">Fecha de Modificacion</label>
                                                <input type="date" id="fechaModificacion" className="form-control" disabled />
                                            </div>
                                        </div>

                                        <div classNameName="text-center  mb-3">
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

export default RegistroTarea
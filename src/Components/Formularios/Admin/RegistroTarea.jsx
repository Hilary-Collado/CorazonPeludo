import React, { useState } from "react";
import Save from "../../Buttons/Save";
import Cancel from "../../Buttons/Cancel";
import Clear from "../../Buttons/Clear";
import HeaderAdmin from '../../Menu/Header/HeaderAdmin/HeaderAdmin'
import Aside from "../../Menu/Aside/Aside";
import CardBase from "../CardBase";
// import './App.css'
import '../../../App.css'

// const tema = (
//     {
//         title: "Registro de Tareas"
//     }
// )

// const [todo, setTodo] = useState({
//     title: "ToDo #1",
// })



const RegistroTarea = () => {

    // const [todos, setTodos] = useState([tema])

    const [todo, setTodo] = useState({
        title: "Registro de Tareas",
    })

    const { title } = todo

    return (
        <>
            <HeaderAdmin />
            <Aside />

            <main id="main" class="main">

                <CardBase todo={todo} />

                <section class="section">
                    <div class="row">
                        <div class="col-lg-12">

                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">{title}</h5>

                                    <form class="needs-validation" id="form" novalidate>

                                        <div class="row mb-3">
                                            <div class="col-md-6 mb-3">
                                                <label for="idTareas" class="form-label">Id Tareas</label>
                                                <input type="text" class="form-control" id="idTareas" disabled />
                                            </div>
                                            <div class="col-md-6">
                                                <label for="descripcion" class="form-label">Descripción</label>
                                                <input type="text" class="form-control" id="descripcion" required />
                                            </div>
                                        </div>

                                        <div class="row mb-3">
                                            <div class="col-md-6 mb-3">
                                                {/* <a href="../enums/registroTipoTarea.html">Crear nuevo</a> */}
                                                <label for="tipoTarea" class="form-label">Tipo Tarea</label>
                                                <select id="tipoTarea" class="form-select" required>
                                                    <div id="data-display">Selecciona Una Opcion...</div>
                                                </select>
                                            </div>
                                            <div class="col-md-6">
                                                {/* <a href="../enums/registroComplejidad.html">Crear nuevo</a> */}
                                                <label for="complejidad" class="form-label">Complejidad</label>
                                                <select id="complejidad" class="form-select" required>
                                                    <div id="data-display1">Selecciona Una Opcion...</div>
                                                </select>
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
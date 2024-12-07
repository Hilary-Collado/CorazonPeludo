import React, { useState } from "react";
import Save from "../../Buttons/Save";
import Cancel from "../../Buttons/Cancel";
import Clear from "../../Buttons/Clear";
import '../../Buttons/Buttons.scss';
import '../../../App.css';

import HeaderAdmin from "../../Menu/Header/HeaderAdmin/HeaderAdmin";
import Aside from "../../Menu/Aside/Aside";
import PageTitle from "../PageTitle";

const RecepcionAnimal =  () => {
    const [titulo, setTitulo] = useState({
        title: "Ingreso de Animales",
    })
    
    const { title } = titulo
    
    return (
        <>
            <HeaderAdmin />  
            <Aside />
            <main id="main" className="main">
                <PageTitle titulo={titulo} />
                <section className="section">
                    <div className="row">
                        <div className="col-lg-12">

                            <div className="card">
                                <div className="card-body">
                                    {/* <h5 className="card-title">Ingreso De Animales</h5> */}
                                    <h5 class="card-title titulo">{title}</h5>

                                    <form action="" id="form">
                                        <div className="row mb-3">
                                            <div className="col-md-6 mb-3">
                                                <label for="idAnimales" className="form-label">ID Animales</label>
                                                <input type="text" className="form-control" id="idAnimales" disabled />
                                            </div>
                                        </div>

                                        <div className="row mb-3">
                                            <div className="col-md-6 mb-3">
                                                <label for="alias" className="form-label">Alias</label>
                                                <input type="text" className="form-control" id="alias" />
                                            </div>
                                            <div className="col-md-6">
                                                <label for="edad" className="form-label">Edad</label>
                                                <input type="number" className="form-control" id="edad" />
                                            </div>
                                        </div>


                                        <div className="row mb-3">
                                            <div className="col-md-6 mb-3">
                                                <label for="peso" className="form-label">Peso</label>
                                                <input type="number" className="form-control" id="peso" />
                                            </div>
                                            <div className="col-md-6">
                                                <label for="altura" className="form-label">Altura</label>
                                                <input type="number" className="form-control" id="altura" />
                                            </div>
                                        </div>

                                        <div className="row mb-3">
                                            <div className="col-md-6 mb-3">
                                                <label for="sexo" className="form-label">Sexo</label>
                                                <select id="sexo" className="form-select"  >
                                                    <option value="" disabled selected>Selecciona Una Opcion...</option>
                                                    <option value="F">Hembra</option>
                                                    <option value="M">Macho</option>
                                                </select>
                                            </div>

                                            <div className="col-md-6">
                                                {/* <a href="../enums/registroEspecie.html">Crear nueva</a> */}
                                                <label for="especie" className="form-label">Especie</label>
                                                <select id="especie" className="form-select"  >
                                                    <div className="data-display0"></div>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="row mb-3">
                                            <div className="col-md-6 mb-3">
                                                {/* <a href="../enums/registroTipoPiel.html">Crear nueva</a> */}
                                                <label for="tipoPiel" className="form-label">Tipo de Piel</label>
                                                <select id="tipoPiel" className="form-select"  >
                                                    <div className="data-display1"></div>
                                                </select>
                                            </div>
                                            <div className="col-md-6">
                                                <label for="origen" className="form-label">Origen Del Animal</label>
                                                <select id="origen" className="form-select"  >
                                                    <option value="" disabled selected>Selecciona Una Opcion...</option>
                                                    <option value="F">Nacido en el albergue</option>
                                                    <option value="M">Dado en adopcion</option>
                                                    <option value="M">Rescatado</option>
                                                </select>
                                            </div>
                                        </div>



                                        <div className="row mb-3">
                                            <div className="col-md-6 mb-3">

                                                <label for="amputaciones" className="form-label">Amputaciones</label>
                                                <select id="amputaciones" className="form-select" onchange="activarAmp()">
                                                    <option value="" disabled selected>Selecciona Una Opcion...</option>
                                                    <option value="si">Si</option>
                                                    <option value="no">No</option>
                                                </select>
                                            </div>
                                            <div className="col-md-6">
                                                <label for="tipoAmputacion" className="form-label">Tipo de Amputaciones</label>
                                                <select id="tipoAmputacion" className="form-select">
                                                    <option value="" disabled selected>Selecciona Una Opcion...</option>
                                                    <option value="pierna">Pierna</option>
                                                    <option value="oreja">Oreja</option>
                                                    <option value="cola">Cola</option>
                                                    <option value="castacion">Castracion</option>
                                                    <option value="castacion">Ninguna</option>
                                                </select>
                                            </div>
                                        </div>


                                        <div className="row mb-3">
                                            <div className="col-md-6 mb-3">
                                                <label for="estado" className="form-label">Estado de Salud del Animal</label>
                                                <select id="estado" className="form-select"  >
                                                    <option value="" disabled selected>Selecciona Una Opcion...</option>
                                                    <option value="saludable">Saludable</option>
                                                    <option value="enfermo">Enfermo</option>
                                                    <option value="desorientado">Desorientado</option>
                                                    <option value="agresivo">Agresivo</option>
                                                </select>
                                            </div>
                                            <div className="col-md-6">
                                                <label for="fechaIngreso" className="form-label">Fecha de Ingreso</label>
                                                <input type="date" id="fechaIngreso" className="form-control" />
                                            </div>
                                        </div>



                                        <div className="row  mb-3">
                                            <div className="col-md-6 mb-3">
                                                <label for="colorFisico" className="form-label">Color Fisico Del Animal</label>
                                                <input type="text" className="form-control" id="colorFisico"
                                                    placeholder="Ejemplo: Blanco con manchas negras" />
                                            </div>
                                            <div className="col-md-6">
                                                <label for="colorOjos" className="form-label">Color De Ojos Del Animal</label>
                                                <input type="text" className="form-control" id="colorOjos" placeholder="Ejemplo: Azules" />
                                            </div>
                                        </div>


                                        <div className="row mb-5">
                                            <div className="col-md-6 mb-3">
                                                <label for="status" className="form-label">Status</label>
                                                <select id="status" className="form-select"  >
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


export default RecepcionAnimal
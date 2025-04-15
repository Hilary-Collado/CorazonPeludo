import React, { useState } from "react";
import CardBaseDos from "../../Formularios/CardBaseDos";
import RecepcionAnimal from "../../Formularios/Animales/RecepcionAnimal";


const Aside = () => {
    const [titulo, setTitulo] = useState({
        title: "hola que tal",
    }) 
    
    return (
        <>
            <aside id="sidebar" className="sidebar">

                <ul className="sidebar-nav" id="sidebar-nav">

                    {/* <!-- Dashboard Nav --> */}
                    <li className="nav-item">
                        <a className="nav-link " href="">
                            <i className="bi bi-grid"></i>
                            <span>Inicio</span>
                        </a>
                    </li>
                    {/* <!-- End Dashboard Nav --> */}

                    {/* <!--Registro --> */}
                    <li className="nav-item">
                        <a className="nav-link collapsed" data-bs-target="#animales-nav" data-bs-toggle="collapse" href="#">
                            <i className="bi bi-menu-button-wide"></i><span>Animales</span><i className="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <CardBaseDos titulo={titulo}/> 
                        
                    </li>
                    {/* <!-- End registro Nav --> */}



                    {/* <!--rescate --> */}
                    <li className="nav-item">
                        <a className="nav-link collapsed" data-bs-target="#enum-nav" data-bs-toggle="collapse" href="#">
                            <i className="bi bi-menu-button-wide"></i><span>Rescate</span><i className="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul id="enum-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                <a href="../rescate/solicitudRescate.html">
                                    <i className="bi bi-circle"></i><span>Solicitud de Rescate</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    {/* <!-- End registro Nav --> */}

                    {/* <!-- adopcion  --> */}
                    <li className="nav-item">
                        <a className="nav-link collapsed" data-bs-target="#adopcion" data-bs-toggle="collapse" href="#">
                            <i className="bi bi-menu-button-wide"></i><span>Adopcion</span><i className="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul id="adopcion" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                <a href="../adopcion/registroCita.html">
                                    <i className="bi bi-circle"></i><span>Registro de Citas</span>
                                </a>
                            </li>
                            <li>
                                <a href="../adopcion/registroSolicitudAdopcion.html">
                                    <i className="bi bi-circle"></i><span>Registro de Solicitante</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    {/* <!-- End Components Nav --> */}


                    {/* <!-- Almacen  --> */}
                    <li className="nav-item">
                        <a className="nav-link collapsed" data-bs-target="#Almacen" data-bs-toggle="collapse" href="#">
                            <i className="bi bi-menu-button-wide"></i><span>Almacen</span><i className="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul id="Almacen" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                <a href="../almacen/registroAlimento.html">
                                    <i className="bi bi-circle"></i><span>Registro de Alimentos</span>
                                </a>
                            </li>
                            <li>
                                <a href="../almacen/registroAlmacen.html">
                                    <i className="bi bi-circle"></i><span>Registro de Almacen</span>
                                </a>
                            </li>

                        </ul>
                    </li>
                    {/* <!-- End Components Nav --> */}


                    {/* <!-- consultas  --> */}
                    <li className="nav-item">
                        <a className="nav-link collapsed" data-bs-target="#consulta" data-bs-toggle="collapse" href="#">
                            <i className="bi bi-menu-button-wide"></i><span>Consultas</span><i className="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul id="consulta" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                <a href="../consultas/ConsultaAlimento.html">
                                    <i className="bi bi-circle"></i><span>Consulta de Alimentos</span>
                                </a>
                            </li>
                            <li>
                                <a href="../consultas/ConsultaAnimales.html">
                                    <i className="bi bi-circle"></i><span>Consulta de Animales</span>
                                </a>
                            </li>

                        </ul>
                    </li>
                    {/* <!-- End Components Nav --> */}

                    {/* <!-- consultas  --> */}
                    <li className="nav-item">
                        <a className="nav-link collapsed" data-bs-target="#otros-nav" data-bs-toggle="collapse" href="#">
                            <i className="bi bi-menu-button-wide"></i><span>Otros registros</span><i className="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul id="otros-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                <a href="../enums/registroTipoPiel.html">
                                    <i className="bi bi-circle"></i><span>Tipo de Piel</span>
                                </a>
                            </li>
                            <li>
                                <a href="../enums/registroEspecie.html">
                                    <i className="bi bi-circle"></i><span>Registro de Especie</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    {/* <!-- End Components Nav --> */}
                </ul>

            </aside>
            {/* <!-- End Sidebar--> */}
        </>
    )
}

export default Aside;
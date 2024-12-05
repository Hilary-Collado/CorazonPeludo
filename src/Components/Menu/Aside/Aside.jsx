const Aside = () => {
    return (
        <>
            <aside id="sidebar" class="sidebar">

                <ul class="sidebar-nav" id="sidebar-nav">

                    {/* <!-- Dashboard Nav --> */}
                    <li class="nav-item">
                        <a class="nav-link " href="../NiceAdmin/index.html">
                            <i class="bi bi-grid"></i>
                            <span>Inicio</span>
                        </a>
                    </li>
                    {/* <!-- End Dashboard Nav --> */}



                    {/* <!--Resgitro --> */}
                    <li class="nav-item">
                        <a class="nav-link collapsed" data-bs-target="#animales-nav" data-bs-toggle="collapse" href="#">
                            <i class="bi bi-menu-button-wide"></i><span>Animales</span><i class="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul id="animales-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                <a href="../animal/registroAnimales.html">
                                    <i class="bi bi-circle"></i><span>Registro De Animales</span>
                                </a>
                            </li>
                            <li>
                                <a href="../consultas/ConsultaAnimales.html">
                                    <i class="bi bi-circle"></i><span>Consulta Animales</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    {/* <!-- End registro Nav --> */}



                    {/* <!--rescate --> */}
                    <li class="nav-item">
                        <a class="nav-link collapsed" data-bs-target="#enum-nav" data-bs-toggle="collapse" href="#">
                            <i class="bi bi-menu-button-wide"></i><span>Rescate</span><i class="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul id="enum-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                <a href="../rescate/solicitudRescate.html">
                                    <i class="bi bi-circle"></i><span>Solicitud de Rescate</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    {/* <!-- End registro Nav --> */}

                    {/* <!-- adopcion  --> */}
                    <li class="nav-item">
                        <a class="nav-link collapsed" data-bs-target="#adopcion" data-bs-toggle="collapse" href="#">
                            <i class="bi bi-menu-button-wide"></i><span>Adopcion</span><i class="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul id="adopcion" class="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                <a href="../adopcion/registroCita.html">
                                    <i class="bi bi-circle"></i><span>Registro de Citas</span>
                                </a>
                            </li>
                            <li>
                                <a href="../adopcion/registroSolicitudAdopcion.html">
                                    <i class="bi bi-circle"></i><span>Registro de Solicitante</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    {/* <!-- End Components Nav --> */}


                    {/* <!-- Almacen  --> */}
                    <li class="nav-item">
                        <a class="nav-link collapsed" data-bs-target="#Almacen" data-bs-toggle="collapse" href="#">
                            <i class="bi bi-menu-button-wide"></i><span>Almacen</span><i class="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul id="Almacen" class="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                <a href="../almacen/registroAlimento.html">
                                    <i class="bi bi-circle"></i><span>Registro de Alimentos</span>
                                </a>
                            </li>
                            <li>
                                <a href="../almacen/registroAlmacen.html">
                                    <i class="bi bi-circle"></i><span>Registro de Almacen</span>
                                </a>
                            </li>

                        </ul>
                    </li>
                    {/* <!-- End Components Nav --> */}


                    {/* <!-- consultas  --> */}
                    <li class="nav-item">
                        <a class="nav-link collapsed" data-bs-target="#consulta" data-bs-toggle="collapse" href="#">
                            <i class="bi bi-menu-button-wide"></i><span>Consultas</span><i class="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul id="consulta" class="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                <a href="../consultas/ConsultaAlimento.html">
                                    <i class="bi bi-circle"></i><span>Consulta de Alimentos</span>
                                </a>
                            </li>
                            <li>
                                <a href="../consultas/ConsultaAnimales.html">
                                    <i class="bi bi-circle"></i><span>Consulta de Animales</span>
                                </a>
                            </li>

                        </ul>
                    </li>
                    {/* <!-- End Components Nav --> */}

                    {/* <!-- consultas  --> */}
                    <li class="nav-item">
                        <a class="nav-link collapsed" data-bs-target="#otros-nav" data-bs-toggle="collapse" href="#">
                            <i class="bi bi-menu-button-wide"></i><span>Otros registros</span><i class="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul id="otros-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                <a href="../enums/registroTipoPiel.html">
                                    <i class="bi bi-circle"></i><span>Tipo de Piel</span>
                                </a>
                            </li>
                            <li>
                                <a href="../enums/registroEspecie.html">
                                    <i class="bi bi-circle"></i><span>Registro de Especie</span>
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
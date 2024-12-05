import logo from '../img-Componentes/logo.png';
import { FaBell } from 'react-icons/fa';
import { CiSearch } from "react-icons/ci";
import { BsExclamationCircle } from "react-icons/bs";
import { GoXCircle } from "react-icons/go";
import { CiCircleCheck } from "react-icons/ci";
import { GoInfo } from "react-icons/go";
// import { BsChatRightText } from "react-icons/bs";
import { BsChatLeftText } from "react-icons/bs";
import profileImg from '../img-Componentes/profile-img.jpg'
import { GoGear } from "react-icons/go";
import { MdOutlinePersonOutline } from "react-icons/md";
import { CiCircleQuestion } from "react-icons/ci";
import { BsBoxArrowRight } from "react-icons/bs";

import './h2.sass'

const HeaderDos = () => {
    return (
        <header id="header" class="header fixed-top d-flex align-items-center">

            <div class="d-flex align-items-center justify-content-between">
                <a href="" class="logo d-flex align-items-center">
                    <img src={logo} alt="" />
                    <span class="">Corazon Peludo</span>
                </a>
                <i class="bi bi-list toggle-sidebar-btn"></i>
            </div>
            {/* <!-- End Logo --> */}

            <div class="search-bar">
                <form class="search-form d-flex align-items-center" method="POST" action="#">
                    <input type="text" name="query" placeholder="Search" title="Enter search keyword" />
                    {/* <button type="submit" title="Search"><i class="bi bi-search"></i></button> */}
                    <button type="submit" title="Search"><CiSearch /></button>
                </form>
            </div>
            {/* <!-- End Search Bar --> */}

            <nav class="header-nav ms-auto">
                <ul class="d-flex align-items-center">

                    <li class="nav-item d-block d-lg-none">
                        <a class="nav-link nav-icon search-bar-toggle " href="#">
                            {/* <i class="bi bi-search"></i> */}
                            <CiSearch />
                        </a>
                    </li>
                    {/* <!-- End Search Icon--> */}

                    <li class="nav-item dropdown">

                        <a class="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                            {/* <i class="bi bi-bell"></i> */}
                            <FaBell />
                            <span class="badge bg-primary badge-number">4</span>
                        </a>
                        {/* <!-- End Notification Icon --> */}

                        <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                            <li class="dropdown-header">
                                Tienes 4 notificaciones
                                <a href="#"><span class="badge rounded-pill bg-primary p-2 ms-2">Ver todo</span></a>
                            </li>
                            <li>
                                <hr class="dropdown-divider" />
                            </li>

                            <li class="notification-item">
                                {/* <i class="bi bi-exclamation-circle text-warning"></i> */}
                                <BsExclamationCircle className='icon text-warning' />
                                <div>
                                    <h4>Lorem Ipsum</h4>
                                    <p>Quae dolorem earum veritatis oditseno</p>
                                    <p>30 min. ago</p>
                                </div>
                            </li>

                            <li>
                                <hr class="dropdown-divider" />
                            </li>

                            <li class="notification-item">
                                <GoXCircle className='icon text-danger' />
                                <div>
                                    <h4>Atque rerum nesciunt</h4>
                                    <p>Quae dolorem earum veritatis oditseno</p>
                                    <p>1 hr. ago</p>
                                </div>
                            </li>

                            <li>
                                <hr class="dropdown-divider" />
                            </li>

                            <li class="notification-item">
                                {/* <i class="bi bi-check-circle text-success"></i> */}
                                <CiCircleCheck className='icon text-success' />
                                <div>
                                    <h4>Sit rerum fuga</h4>
                                    <p>Quae dolorem earum veritatis oditseno</p>
                                    <p>2 hrs. ago</p>
                                </div>
                            </li>

                            <li>
                                <hr class="dropdown-divider" />
                            </li>

                            <li class="notification-item">
                                {/* <i class="bi bi-info-circle text-primary"></i> */}
                                <GoInfo className="icon text-primary" />

                                <div>
                                    <h4>Dicta reprehenderit</h4>
                                    <p>Quae dolorem earum veritatis oditseno</p>
                                    <p>4 hrs. ago</p>
                                </div>
                            </li>

                            <li>
                                <hr class="dropdown-divider" />
                            </li>
                            <li class="dropdown-footer">
                                <a href="#">Show all notifications</a>
                            </li>

                        </ul>
                        {/* <!-- End Notification Dropdown Items --> */}

                    </li>
                    {/* <!-- End Notification Nav --> */}




                    <li class="nav-item dropdown">

                        <a class="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                            {/* <i class="bi bi-chat-left-text"></i>
                            <BsChatRightText /> */}
                            <BsChatLeftText />
                            <span class="badge bg-success badge-number">3</span>
                        </a>
                        {/* <!-- End Messages Icon --> */}

                        <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
                            <li class="dropdown-header">
                                Tienes 3 nuevos mensajes
                                <a href="#"><span class="badge rounded-pill bg-primary p-2 ms-2">Ver todo</span></a>
                            </li>
                            <li>
                                <hr class="dropdown-divider" />
                            </li>

                            <li class="message-item">
                                <a href="#">
                                    <img src="assets/img/messages-1.jpg" alt="" class="rounded-circle" />
                                    <div>
                                        <h4>Maria Hudson</h4>
                                        <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                                        <p>4 hrs. ago</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <hr class="dropdown-divider" />
                            </li>

                            <li class="message-item">
                                <a href="#">
                                    <img src="assets/img/messages-2.jpg" alt="" class="rounded-circle" />
                                    <div>
                                        <h4>Anna Nelson</h4>
                                        <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                                        <p>6 hrs. ago</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <hr class="dropdown-divider" />
                            </li>

                            <li class="message-item">
                                <a href="#">
                                    <img src="assets/img/messages-3.jpg" alt="" class="rounded-circle" />
                                    <div>
                                        <h4>David Muldon</h4>
                                        <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                                        <p>8 hrs. ago</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <hr class="dropdown-divider" />
                            </li>

                            <li class="dropdown-footer">
                                <a href="#">Show all messages</a>
                            </li>

                        </ul>
                        {/* <!-- End Messages Dropdown Items --> */}

                    </li>
                    {/* <!-- End Messages Nav --> */}

                    <li class="nav-item dropdown pe-3">

                        <a class="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
                            {/* <img src="../NiceAdmin/assets/img/profile-img.jpg" alt="Profile" class="rounded-circle" /> */}
                            <img src={profileImg} alt="Profile" className='rounded-circle'/>
                            <span class="d-none d-md-block dropdown-toggle ps-2">K. Anderson</span>
                        </a>
                        {/* <!-- End Profile Iamge Icon --> */}

                        <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                            <li class="dropdown-header">
                                <h6>Kevin Anderson</h6>
                                <span>Administrador</span>
                            </li>
                            <li>
                                <hr class="dropdown-divider" />
                            </li>

                            <li>
                                <a class="dropdown-item d-flex align-items-center" href="users-profile.html">
                                    {/* <i class="bi bi-person"></i> */}
                                    <MdOutlinePersonOutline className='icon' />
                                    <span>Mi perfil</span>
                                </a>
                            </li>
                            <li>
                                <hr class="dropdown-divider" />
                            </li>

                            <li>
                                <a class="dropdown-item d-flex align-items-center" href="users-profile.html">
                                    {/* <i class="bi bi-gear"></i> */}
                                    <GoGear className='icon' />
                                    <span>Ajustes</span>
                                </a>
                            </li>
                            <li>
                                <hr class="dropdown-divider" />
                            </li>

                            <li>
                                <a class="dropdown-item d-flex align-items-center" href="pages-faq.html">
                                    {/* <i class="bi bi-question-circle"></i> */}
                                    <CiCircleQuestion className='icon' />
                                    <span>Help?</span>
                                </a>
                            </li>
                            <li>
                                <hr class="dropdown-divider" />
                            </li>

                            <li>
                                <a class="dropdown-item d-flex align-items-center" href="#">
                                    {/* <i class="bi bi-box-arrow-right"></i> */}
                                    <BsBoxArrowRight className='icon' />
                                    <span>Cerrar Sesion</span>
                                </a>
                            </li>

                        </ul>
                        {/* <!-- End Profile Dropdown Items --> */}
                    </li>
                    {/* <!-- End Profile Nav --> */}

                </ul>
            </nav>
            {/* <!-- End Icons Navigation --> */}

        </header>
    )
}

export default HeaderDos
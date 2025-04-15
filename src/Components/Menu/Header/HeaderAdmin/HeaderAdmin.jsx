// imagenes
import logo from "../../../img-Componentes/logo.png";
import profileImg from "../../../img-Componentes/profile-img.jpg";
import "../../../../App.css";
// iconos
import { FaBell } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { BsExclamationCircle } from "react-icons/bs";
import { GoXCircle } from "react-icons/go";
import { CiCircleCheck } from "react-icons/ci";
import { GoInfo } from "react-icons/go";
import { BsChatLeftText } from "react-icons/bs";
import { GoGear } from "react-icons/go";
import { MdOutlinePersonOutline } from "react-icons/md";
import { CiCircleQuestion } from "react-icons/ci";
import { BsBoxArrowRight } from "react-icons/bs";
import { BsList } from "react-icons/bs";

import NombreUsuario from "./NombreUsuario";

import "./HeaderAdmin.sass";
import BotonCerrarSesion from "../../../Buttons/CerrarSesion";

const HeaderAdmin = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const nombreCompleto = user ? `${user.nombre} ${user.apellido}` : "Invitado";
  const rol = user ? user.rol : "Sin rol";

  return (
    <header id="header" className="header fixed-top d-flex align-items-center">
      <div className="d-flex align-items-center justify-content-between">
        <a href="" className="logo d-flex align-items-center">
          <img src={logo} alt="Logo" />
          <span className="">Corazon Peludo</span>
        </a> 
       
        <BsList classNameName="icon toggle-sidebar-btn" />
      </div>
      
      <div className="search-bar">
        <form
          className="search-form d-flex align-items-center"
          method="POST"
          action="#"
        >
          <input
            type="text"
            name="query"
            placeholder="Search"
            title="Enter search keyword"
          />
          
          <button type="submit" title="Search">
            <CiSearch />
          </button>
        </form>
      </div>
      {/* <!-- End Search Bar --> */}

      <nav className="header-nav ms-auto">
        <ul className="d-flex align-items-center">
          <li className="nav-item d-block d-lg-none">
            <a className="nav-link nav-icon search-bar-toggle " href="#">
              <CiSearch />
            </a>
          </li>
          {/* <!-- End Search Icon--> */}

          <li className="nav-item dropdown">
            <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
              
              <FaBell />
              <span className="badge bg-primary badge-number">4</span>
            </a>

            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
              <li className="dropdown-header">
                Tienes 4 notificaciones
                <a href="#">
                  <span className="badge rounded-pill bg-primary p-2 ms-2">
                    Ver todo
                  </span>
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>

              <li className="notification-item">
                
                <BsExclamationCircle classNameName="icon text-warning" />
                <div>
                  <h4>Lorem Ipsum</h4>
                  <p>Quae dolorem earum veritatis oditseno</p>
                  <p>30 min. ago</p>
                </div>
              </li>

              <li>
                <hr className="dropdown-divider" />
              </li>

              <li className="notification-item">
                <GoXCircle classNameName="icon text-danger" />
                <div>
                  <h4>Atque rerum nesciunt</h4>
                  <p>Quae dolorem earum veritatis oditseno</p>
                  <p>1 hr. ago</p>
                </div>
              </li>

              <li>
                <hr className="dropdown-divider" />
              </li>

              <li className="notification-item">
                <CiCircleCheck classNameName="icon text-success" />
                <div>
                  <h4>Sit rerum fuga</h4>
                  <p>Quae dolorem earum veritatis oditseno</p>
                  <p>2 hrs. ago</p>
                </div>
              </li>

              <li>
                <hr className="dropdown-divider" />
              </li>

              <li className="notification-item">
                <GoInfo classNameName="icon text-primary" />

                <div>
                  <h4>Dicta reprehenderit</h4>
                  <p>Quae dolorem earum veritatis oditseno</p>
                  <p>4 hrs. ago</p>
                </div>
              </li>

              <li>
                <hr className="dropdown-divider" />
              </li>
              <li className="dropdown-footer">
                <a href="#">Show all notifications</a>
              </li>
            </ul>
            {/* <!-- End Notification Dropdown Items --> */}
          </li>
          {/* <!-- End Notification Nav --> */}

          <li className="nav-item dropdown">
            <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
              <BsChatLeftText />
              <span className="badge bg-success badge-number">3</span>
            </a>
            {/* <!-- End Messages Icon --> */}

            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
              <li className="dropdown-header">
                Tienes 3 nuevos mensajes
                <a href="#">
                  <span className="badge rounded-pill bg-primary p-2 ms-2">
                    Ver todo
                  </span>
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>

              <li className="message-item">
                <a href="#">
                  <img
                    src="assets/img/messages-1.jpg"
                    alt=""
                    className="rounded-circle"
                  />
                  <div>
                    <h4>Maria Hudson</h4>
                    <p>
                      Velit asperiores et ducimus soluta repudiandae labore
                      officia est ut...
                    </p>
                    <p>4 hrs. ago</p>
                  </div>
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>

              <li className="message-item">
                <a href="#">
                  <img
                    src="assets/img/messages-2.jpg"
                    alt=""
                    className="rounded-circle"
                  />
                  <div>
                    <h4>Anna Nelson</h4>
                    <p>
                      Velit asperiores et ducimus soluta repudiandae labore
                      officia est ut...
                    </p>
                    <p>6 hrs. ago</p>
                  </div>
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>

              <li className="message-item">
                <a href="#">
                  <img
                    src="assets/img/messages-3.jpg"
                    alt=""
                    className="rounded-circle"
                  />
                  <div>
                    <h4>David Muldon</h4>
                    <p>
                      Velit asperiores et ducimus soluta repudiandae labore
                      officia est ut...
                    </p>
                    <p>8 hrs. ago</p>
                  </div>
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>

              <li className="dropdown-footer">
                <a href="#">Show all messages</a>
              </li>
            </ul>
            {/* <!-- End Messages Dropdown Items --> */}
          </li>
          {/* <!-- End Messages Nav --> */}

          <li className="nav-item dropdown pe-3">
            <a
              className="nav-link nav-profile d-flex align-items-center pe-0"
              href="#"
              data-bs-toggle="dropdown"
            >
            
              <NombreUsuario />
            </a>
            {/* <!-- End Profile Iamge Icon --> */}

            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
              <li className="dropdown-header">
                <h6>
                  {user
                    ? user.username === "admin"
                      ? "Administración"
                      : nombreCompleto
                    : "Invitado"}
                </h6>
                
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>

              <li>
                <a
                  className="dropdown-item d-flex align-items-center"
                  href="users-profile.html"
                >
                  <MdOutlinePersonOutline classNameName="icon" />
                  <span>Mi perfil</span>
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>

              <li>
                <a
                  className="dropdown-item d-flex align-items-center"
                  href="users-profile.html"
                >
                  <GoGear classNameName="icon" />
                  <span>Ajustes</span>
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>

              <li>
                <a
                  className="dropdown-item d-flex align-items-center"
                  href="pages-faq.html"
                >
                  <CiCircleQuestion classNameName="icon" />
                  <span>Help?</span>
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>

              <li>
                <a className="dropdown-item d-flex align-items-center" href="#">
                  
                  <BotonCerrarSesion />
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
  );
};

export default HeaderAdmin;

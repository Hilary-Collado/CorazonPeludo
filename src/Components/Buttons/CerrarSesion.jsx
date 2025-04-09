import React from "react";
import { BsBoxArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const BotonCerrarSesion = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user"); // Eliminar datos del usuario
    navigate("/"); // Redirigir al login
  };

  return (
    <a
      className="dropdown-item d-flex align-items-center"
      href="#"
      onClick={handleLogout}
    >
      <BsBoxArrowRight className="icon" />
      <span>Cerrar Sesión</span>
    </a>
  );
};

export default BotonCerrarSesion;

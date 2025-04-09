// src/Components/Mensajes/NoAutorizado.jsx
import React from "react";
import { Link } from "react-router-dom";

const NoAutorizado = () => {
  return (
    <div className="container text-center mt-5">
      <h2>Acceso Denegado</h2>
      <p>No tienes permisos para ver esta página. Por favor inicia sesión.</p>
      <Link className="btn btn-primary mt-3" to="/">Ir al Login</Link>
    </div>
  );
};

export default NoAutorizado;

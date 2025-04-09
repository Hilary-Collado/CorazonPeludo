import React from "react";

const NombreUsuario = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) return null;

  const nombre = user.nombre || "Usuario";
  const apellido = user.apellido || "";

  return <span className="d-none d-md-block dropdown-toggle ps-2">{`${nombre} ${apellido}`}</span>;
};

export default NombreUsuario;
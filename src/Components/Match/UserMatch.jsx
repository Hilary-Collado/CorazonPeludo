// src/Components/Dashboard/DashboardUsuarioConMatch.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import HeaderAdmin from "../Menu/Header/HeaderAdmin/HeaderAdmin";
import Aside from "../Menu/Aside/Aside";
import { Link } from "react-router-dom";

const getColorByPercentage = (percentage) => {
  if (percentage >= 0.75) return "bg-success text-white";
  if (percentage >= 0.5) return "bg-warning text-dark";
  return "bg-danger text-white";
};


const UserMatch = () => {
  const [animalesCompatibles, setAnimalesCompatibles] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/match/${user.id_persona}`
        );
        setAnimalesCompatibles(response.data);
      } catch (err) {
        console.error("Error al obtener los matches", err);
      }
    };

    fetchMatches();
  }, []);

  return (
    <>
      <HeaderAdmin />
      <Aside />
      <main id="main" className="main">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2>Compatibilidades con Animales</h2>
          <Link to="/actualizar-informacion" className="btn btn-primary">
            Actualizar Información
          </Link>
        </div>

        <div className="row">
          {animalesCompatibles.map((animal) => (
            <div key={animal.idIngAnimales} className="col-md-4 mb-4">
              <div className={`card ${getColorByPercentage(animal.porcentaje_compatibilidad)}`}>
                <div className="card-body">
                  <h5 className="card-title">{animal.nombre}</h5>
                  <p>Género: {animal.genero}</p>
                  <p>Compatibilidad: {(animal.porcentaje_compatibilidad * 100).toFixed(0)}%</p>
                  <button className="btn btn-light w-100">Ver más</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default UserMatch;
 
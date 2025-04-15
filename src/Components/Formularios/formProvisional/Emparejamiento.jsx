import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CriteriosMatchCard from "./CriteriosMatchCard";

import HeaderAdmin from "../../Menu/Header/HeaderAdmin/HeaderAdmin";
import Aside from "../../Menu/Aside/Aside";
import PageTitle from "../../ComponentesRepetitivos/PageTitle";
import PantallaEmparejamientos from "./PantallaEmparejamientos";

import "../../../App.css";

const Emparejamiento = () => {
  const [dashboard, setDashboard] = useState({
    title: "Dashboard",
  });

  const { title } = dashboard;

  const [animales, setAnimales] = useState([]);
  const [usuario, setUsuario] = useState(null);
  const [esNuevo, setEsNuevo] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (!userData || !userData.id_persona) return navigate("/");
    setUsuario(userData);

    const verificarMatch = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8000/api/match/${userData.id_persona}`
        );
        if (!res.data || res.data.length === 0) setEsNuevo(true);
      } catch (err) {
        console.error("❌ Error al verificar compatibilidad:", err);
        setEsNuevo(true);
      }
    };

    verificarMatch();
  }, [navigate]);

  return (
    <>
      <div className="completo flex flex-col md:flex-row gap-4 p-4">
        <div className="w-full">
          {esNuevo ? (
            <>
              <div className="alert alert-info">
                Por favor, completa tu información para obtener recomendaciones.
              </div>
              <button
                className="btn btn-primary mb-4"
                onClick={() => navigate("#")}
              >
                Completar Información
              </button>
              <PantallaEmparejamientos
                idPersona={usuario?.id_persona}
                esNuevo={true}
              />
            </>
          ) : (
            <div className="">
              <div className="w-full ">
                <PantallaEmparejamientos idPersona={usuario?.id_persona} />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Emparejamiento;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import HeaderAdmin from "../../Menu/Header/HeaderAdmin/HeaderAdmin";
import Aside from "../../Menu/Aside/Aside";
import PageTitle from "../../ComponentesRepetitivos/PageTitle";
import PantallaEmparejamientos from "./PantallaEmparejamientos";

import "../../../App.css";

const Emparejamiento = () => {
  const [dashboard, setDashboard] = useState({
    // title: "Dashboard",
    mensaje: "Hola,",
  });

  const { mensaje } = dashboard;

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
      {/* <HeaderAdmin /> */}
      {/* <Aside /> */}
      <main id="main" className="main">
        {/* <PageTitle titulo={dashboard} /> */}
        {/* <section className="section">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                {dashboard.mensaje} {usuario?.nombre}
              </h5> */}

              {esNuevo ? (
                <>
                  <div className="alert alert-info">
                    Por favor, completa tu información para obtener
                    recomendaciones.
                  </div>
                  <button
                    className="btn btn-primary mb-4"
                    onClick={() => navigate("#")} // ← Puedes cambiar a la ruta de tu formulario
                  >
                    Completar Información
                  </button>
                  <PantallaEmparejamientos
                    idPersona={usuario?.id_persona}
                    esNuevo={true}
                  />
                </>
              ) : (
                <PantallaEmparejamientos idPersona={usuario?.id_persona} />
              )}
            {/* </div>
          </div>
        </section> */}
      </main>
    </>
  );

};

export default Emparejamiento;

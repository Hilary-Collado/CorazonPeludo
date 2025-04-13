import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import HeaderAdmin from "./Components/Menu/Header/HeaderAdmin/HeaderAdmin";
import Aside from "./Components/Menu/Aside/Aside";
import PageTitle from "./Components/ComponentesRepetitivos/PageTitle";
import PantallaEmparejamientos from "../src/Components/Formularios/formProvisional/PantallaEmparejamientos";

import "./App.css";
import Emparejamiento from "./Components/Formularios/formProvisional/Emparejamiento";
import DatatableAnimales from "./Components/Consultas/DataTable/DatatableAnimales";
import ShowAnimals from "./Components/Formularios/Animales/ShowAnimals";

const Dashboard = () => {
  const [dashboard, setDashboard] = useState({
    title: "Dashboard",
    mensaje: "Hola,",
  });

  const { title, mensaje } = dashboard;

  // const [animales, setAnimales] = useState([]);
  // const [usuario, setUsuario] = useState(null);
  // const [esNuevo, setEsNuevo] = useState(false);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const userData = JSON.parse(localStorage.getItem("user"));
  //   if (!userData || !userData.id_persona) return navigate("/");
  //   setUsuario(userData);

  //   const fetchAnimales = async () => {
  //     try {
  //       const res = await axios.get(
  //         `http://localhost:8000/api/match/${userData.id_persona}`
  //       );
  //       if (res.data && res.data.length > 0) {
  //         setAnimales(res.data);
  //       } else {
  //         // No tiene datos suficientes para match
  //         setEsNuevo(true);
  //         const sinMatch = await axios.get(
  //           "http://localhost:8000/api/animales"
  //         );
  //         setAnimales(sinMatch.data);
  //       }
  //     } catch (error) {
  //       console.error("Error al obtener animales:", error);
  //     }
  //   };

  //   fetchAnimales();
  // }, [navigate]);

  // useEffect(() => {
  //   const userData = JSON.parse(localStorage.getItem("user"));
  //   if (!userData || !userData.id_persona) return navigate("/");
  //   setUsuario(userData);

  //   const verificarMatch = async () => {
  //     try {
  //       const res = await axios.get(
  //         `http://localhost:8000/api/match/${userData.id_persona}`
  //       );
  //       if (!res.data || res.data.length === 0) setEsNuevo(true);
  //     } catch (err) {
  //       console.error("❌ Error al verificar compatibilidad:", err);
  //       setEsNuevo(true);
  //     }
  //   };

  //   verificarMatch();
  // }, [navigate]);

  return (
    <>
      <HeaderAdmin />
      <Aside />
      <main id="main" className="main">
        <PageTitle titulo={dashboard} />
        <section className="section">
          <div className="card">
            <div className="card-body">
              {/* <h5 className="card-title">
                {title}
                {/* {dashboard.mensaje} {usuario?.nombre} */}
              {/* </h5> */} 
         

              <ShowAnimals/> 

              {/* <Emparejamiento/> */}

              {/* <p>mostrar todos los animales en cards</p> */}

              {/* <DatatableAnimales /> */}


            </div>
          </div>
        </section>
      </main>
    </>
  );

};

export default Dashboard;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"; 

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
    title: "Compatibilidad",
  });

  const { title } = dashboard;


  return (
    <>
      <HeaderAdmin />
      <Aside />
      <main id="main" className="main">
        <PageTitle titulo={dashboard} />
        <section className="section">
          <div className="card">
            <div className="card-body">
              <Emparejamiento />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Dashboard;

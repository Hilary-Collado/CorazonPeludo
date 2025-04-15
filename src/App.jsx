import "./App.css";

import Header from "./Components/Menu/Header/HeaderCliente/HeaderCliente";
import RegistroTarea from "./Components/Formularios/Admin/RegistroTarea";
import RegistroUsuario from "./Components/Formularios/Admin/RegistroUsuario";
import RegistroCita from "./Components/Formularios/Adopcion/RegistroCita";
import RegistroComplicaciones from "./Components/Formularios/Enums/RegistroComplicaciones";
import RecepcionAnimal from "./Components/Formularios/Animales/RecepcionAnimal";
import RegistroDonante from "./Components/Formularios/Donaciones/RegistroDonante";
import Cirugia from "./Components/Formularios/Salud/Cirugia";
import Footer from "./Components/Footer/Footer";
import RegistroSolicitudRescate from "./Components/Formularios/Rescate/RegistroSolicitudRescate";
import Aside from "./Components/Menu/Aside/Aside";
// import CardMedio from './Components/Formularios/CardMedio';
import RegistroAlimento from "./Components/Formularios/Almacen/RegistroAlimento";
import RegistroSolicitudAdopcion from "./Components/Formularios/Adopcion/RegistroSolicitudAdopcion";
import RegistroAlmacen from "./Components/Formularios/Almacen/RegistroAlmacen";
import RegistroProducto from "./Components/Formularios/Almacen/RegistroProducto";
import RegistroProveedores from "./Components/Formularios/Almacen/RegistroProveedores";
import RegistroDonaciones from "./Components/Formularios/Donaciones/RegistroDonaciones";
import RegistroCompanhia from "./Components/Formularios/Empresa/RegistroCompanhia";
import RegistroEmpleado from "./Components/Formularios/Empresa/RegistroEmpleado";
import RegistroSucursal from "./Components/Formularios/Empresa/RegistroSucursal";
import RegistroActividadEconomica from "./Components/Formularios/Enums/RegistroActividadEconomica";
import RegistroComplejidad from "./Components/Formularios/Enums/RegistroComplejidad";
import Selector from "./Components/ComponentesRepetitivos/Selector";
import ComboBox from "./Components/ComponentesRepetitivos/ComboBox";
import RegistroEnfermedad from "./Components/Formularios/Salud/RegistroEnfermedad";
import RegistroMedicamento from "./Components/Formularios/Salud/RegistroMedicamento";
import RegistroSintoma from "./Components/Formularios/Salud/RegistroSintoma";
import RegistroTratamiento from "./Components/Formularios/Salud/RegistroTratamiento";
import RegistroEspecie from "./Components/Formularios/Enums/RegistroEspecie";
import EspeciesSelect from "./Components/Comp/CompEspeciesSelect";
// import tipoAmputacion from './Components/ComponentesRepetitivos/TipoAmputaciones';

import TipoAmput from "./Components/Comp/CompTipoAmput";
// import ProcesoCP from "./Components/Consultas/procesoCP";
import RegistroAdoptante from "./Components/Formularios/Adopcion/RegistroAdoptante";
import Mostrar from "./Components/Formularios/Adopcion/Mostrar";
import PantallaEmparejamientos from "./Components/Formularios/formProvisional/PantallaEmparejamientos";

import Dashboard from "./Dashboard";
import Login from "./Components/Formularios/Ingreso/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import NoAutorizado from "./Components/ComponentesRepetitivos/NoAutorizado";

const PrivateRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user ? children : <Navigate to="/no-autorizado" />;
};

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/emparejamiento"
            element={
              <PrivateRoute>
                <PantallaEmparejamientos />
              </PrivateRoute>
            }
          />

          {/* Redirección genérica para rutas no existentes */}
          <Route path="*" element={<Navigate to="/" />} />

          <Route path="/no-autorizado" element={<NoAutorizado />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

/*
  // En App.jsx
  const PrivateRoute = ({ children }) => {
    const user = JSON.parse(localStorage.getItem("user"));
    return user ? children : <Navigate to="/" />;
  };

  <Routes>
    <Route path="/" element={<Login />} />
    <Route
      path="/dashboard"
      element={
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
      }
    />
  </Routes>
*/

import './App.css'
// src/index.js
// import './styles/custom-bootstrap.scss';

// import './App.scss'

import Header from './Components/Menu/Header/HeaderCliente/HeaderCliente';
import RegistroTarea from './Components/Formularios/Admin/RegistroTarea';
import RegistroUsuario from './Components/Formularios/Admin/RegistroUsuario';
import RegistroCita from './Components/Formularios/Adopcion/RegistroCita';
import RegistroComplicaciones from './Components/Formularios/Enums/RegistroComplicaciones';
import RecepcionAnimal from './Components/Formularios/Animales/RecepcionAnimal';
import RegistroDonante from './Components/Formularios/Donaciones/RegistroDonante'
import Cirugia from './Components/Formularios/Salud/Cirugia';
import Footer from './Components/Footer/Footer';
import RegistroSolicitudRescate from './Components/Formularios/Rescate/RegistroSolicitudRescate';
import Aside from './Components/Menu/Aside/Aside';
// import CardMedio from './Components/Formularios/CardMedio';
import RegistroAlimento from './Components/Formularios/Almacen/RegistroAlimento';
import RegistroSolicitudAdopcion from './Components/Formularios/Adopcion/RegistroSolicitudAdopcion';
import RegistroAlmacen from './Components/Formularios/Almacen/RegistroAlmacen';
import RegistroProducto from './Components/Formularios/Almacen/RegistroProducto';
import RegistroProveedores from './Components/Formularios/Almacen/RegistroProveedores';
import RegistroDonaciones from './Components/Formularios/Donaciones/RegistroDonaciones';
import RegistroCompanhia from './Components/Formularios/Empresa/RegistroCompanhia';
import RegistroEmpleado from './Components/Formularios/Empresa/RegistroEmpleado';
import RegistroSucursal from './Components/Formularios/Empresa/RegistroSucursal';
import RegistroActividadEconomica from './Components/Formularios/Enums/RegistroActividadEconomica';
import RegistroComplejidad from './Components/Formularios/Enums/RegistroComplejidad';
import Selector from './Components/ComponentesRepetitivos/Selector';
import ComboBox from './Components/ComponentesRepetitivos/ComboBox';
import RegistroEnfermedad from './Components/Formularios/Salud/RegistroEnfermedad';
import RegistroMedicamento from './Components/Formularios/Salud/RegistroMedicamento';
import RegistroSintoma from './Components/Formularios/Salud/RegistroSintoma';
import RegistroTratamiento from './Components/Formularios/Salud/RegistroTratamiento';


function App() {
  return (
    <>
      <RegistroTarea />
    </>
  )
}

export default App

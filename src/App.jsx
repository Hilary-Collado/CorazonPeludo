import './App.css'
// src/index.js
// import './styles/custom-bootstrap.scss';

// import './App.scss'

import Header from './Components/Menu/Header/HeaderCliente/HeaderCliente';
import Recepcion from './Components/Formularios/Animales/RecepcionAnimal';
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
import CardMedio from './Components/Formularios/CardMedio';
import RegistroAlimento from './Components/Formularios/Almacen/RegistroAlimento';

function App() {
  return (
    <>
    <RegistroAlimento/>
    {/* <CardMedio/> */}
    {/* <Aside/> */}
    {/* <RecepcionAnimal/> */}
    {/* <RegistroSolicitudRescate/> */}
    {/* <Cirugia/> */}
    {/* <Footer/> */}
    </>
  )
}

export default App

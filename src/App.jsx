import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// src/index.js
// import './styles/custom-bootstrap.scss';

// import './App.scss'

import Header from './Components/Menu/Header/HeaderCliente/HeaderCliente';
import NavBar from './Components/Menu/Navbar/NavBar';
import Recepcion from './Components/Formularios/Animales/RecepcionAnimal';
import RegistroTarea from './Components/Formularios/Admin/RegistroTarea';
import RegistroUsuario from './Components/Formularios/Admin/RegistroUsuario';
import RegistroCita from './Components/Formularios/Adopcion/RegistroCita';
import RegistroComplicaciones from './Components/Formularios/Enums/RegistroComplicaciones';

import RecepcionAnimal from './Components/Formularios/Animales/RecepcionAnimal';
import RegistroDonante from './Components/Formularios/Donaciones/RegistroDonante'
import Cirugia from './Components/Formularios/Salud/Cirugia';

function App() {
  return (
    <>
    <Cirugia/>
    {/* <div className="container">
      <RegistroDonante />
    </div> */}
    </>
  )
}

export default App

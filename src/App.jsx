import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import './App.scss'
import Header from './Components/Menu/Header/Header';
import NavBar from './Components/Menu/Navbar/NavBar';
import Recepcion from './Components/Formularios/Animales/RecepcionAnimal';
import RegistroTarea from './Components/Formularios/Admin/RegistroTarea';
import RegistroUsuario from './Components/Formularios/Admin/RegistroUsuario';
import RegistroCita from './Components/Formularios/Adopcion/RegistroCita';
import RegistroComplicaciones from './Components/Formularios/Enums/RegistroComplicaciones';

import RecepcionAnimal from './Components/Formularios/Animales/RecepcionAnimal';

function App() {
  return (
    <>
    <div className="container">
      <RecepcionAnimal />
    </div>
    </>
  )
}

export default App

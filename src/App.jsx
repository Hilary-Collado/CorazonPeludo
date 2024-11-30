import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import './App.scss'
import Header from './Components/Header/Header';
import NavBar from './Components/Navbar/NavBar';
import RecepcionAnimal from './Components/Formularios/Animales/RecepcionAnimal';
import Recepcion from './Components/Formularios/Animales/RecepcionAnimal';
import RegistroTarea from './Components/Formularios/Admin/RegistroTarea';
import RegistroUsuario from './Components/Formularios/Admin/RegistroUsuario';
import RegistroCita from './Components/Formularios/Adopcion/RegistroCita';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <div className="card-body">
          <RegistroCita />

        </div>
      </div>
      {/* <RegistroCita /> */}

      {/* <RegistroUsuario/> */}
      {/* <RegistroTarea /> */}
      {/* <Recepcion/> */}
      {/* <RecepcionAnimal/> */}
      {/* <div className="menu"> */}
      {/* <section className='sectionMenuHeader'><Header /></section> */}
      {/* <section className='sectionMenuNavbar'><NavBar /></section> */}
      {/* <Header /> */}
      {/* <NavBar /> */}
      {/* </div> */}
    </>
  )
}

export default App

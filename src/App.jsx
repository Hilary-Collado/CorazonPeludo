import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import './App.scss'
import Header from './Components/Header/Header';
import NavBar from './Components/Navbar/NavBar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="menu">
        {/* <section className='sectionMenuHeader'><Header /></section> */}
        <section className='sectionMenuNavbar'><NavBar /></section>
        {/* <Header /> */}
        {/* <NavBar /> */}
      </div>
    </>
  )
}

export default App

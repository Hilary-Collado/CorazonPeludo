import React from "react";
import ReactDOM from 'react-dom';
import './NavBar.scss';
import { RiHomeHeartLine } from "react-icons/ri";
import { BsHouseHeartFill } from "react-icons/bs";
import { BsIncognito } from "react-icons/bs";

export default function NavBar() {
    return (
        <>
            <div className="main-container d-flex">
                <div className="sidebar" id="side_nav">
                    <div className="header-box px-2 pt-3 pb-4">
                        <h1 className="fs-4">
                            <span className="bg-white text-dark rounded shadow px-2 me-2">CL</span> <span>Coding League</span>
                            <button className="btn d-md-none d-block close-btn px-1 py-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                                </svg>
                            </button>

                        </h1>
                    </div>

                    <ul className="list-unstyled px-2">
                        <li className=""><a href="#" className="text-decoration-none">
                            {/* <RiHomeHeartLine /> */}
                            <BsHouseHeartFill />
                             Dashboard</a></li>
                        
                        <li className=""><a href="#" className="text-decoration-none"><BsIncognito />recepcion</a></li>
                        
                        <li className=""><a href="#" className="text-decoration-none"><BsIncognito />Rescate</a></li>
                        
                        <li className=""><a href="#" className="text-decoration-none"><BsIncognito />Adopcion</a></li>
                        <li className=""><a href="#" className="text-decoration-none"><BsIncognito />vehiculo</a></li>
                        <li className=""><a href="#" className="text-decoration-none"><BsIncognito />Salud</a></li>
                        <li className=""><a href="#" className="text-decoration-none"><BsIncognito />entrega</a></li>
                        <li className=""><a href="#" className="text-decoration-none"><BsIncognito />admin</a></li>
                        <li className=""><a href="#" className="text-decoration-none"><BsIncognito />almacen</a></li>
                    </ul>
                    <hr className="h-color mx-2" />
                </div>
                <div className="content">
                    
                </div>
            </div>
        </>
    )
}



{/* <section className="sectionNavBar">
                <nav className="navBar">
                    <ul className="itemNav">
                        <li className="items">rescate</li>
                        <li className="items">adopcion</li>
                        <li className="items">alertas</li>
                        <li className="items">inventario</li>
                        <li className="items">medicamentos</li>
                    </ul>
                </nav>

                
</section> */}
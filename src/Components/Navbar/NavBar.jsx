import React from "react";
import './NavBar.scss';

export default function NavBar (){
    return(
        <>
            <section className="sectionNavBar">
                <nav className="navBar">
                    soy un navbar 
                    <ul className="itemNav">
                        <li className="items">rescate</li>
                        <li className="items">adopcion</li>
                        <li className="items">alertas</li>
                        <li className="items">inventario</li>
                        <li className="items">medicamentos</li>
                    </ul>
                </nav>

                
            </section>
        </>
    )
}
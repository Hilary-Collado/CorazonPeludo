import React from "react";
import './Header.scss';

export default function Header() {
    return (
        <>
            <section className="sectionHeader">
                <nav className="navBar">
                    <div className="logo">Corazon</div>
                    <ul className="navItem">
                        <li className="items"><a href="">inicio</a></li>
                        <li className="items"><a href="">contacto</a></li>
                        <li className="items"><a href="">otro</a></li>
                    </ul>
                </nav>


            </section>
        </>
    )
}
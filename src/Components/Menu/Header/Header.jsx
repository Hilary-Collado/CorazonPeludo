import React from "react";
import './Header.scss';

export default function Header() {
    return (
        <>
            <section className="sectionHeader">
                <nav className="navBar">
                    <section className="sectionLogo  border-end border-bottom">
                        <div className="logo">Corazon</div>

                    </section>
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
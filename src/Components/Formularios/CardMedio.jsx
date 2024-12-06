import React, { useState } from "react";
import CardBase from "./CardBase"
import CardBaseDos from "./CardBaseDos";
import Aside from "../Menu/Aside/Aside";



const CardMedio = () => {

    const [titulo, setTitulo] = useState({
        title: "Ingreso de Animales",
    })

    const { title } = titulo

    return (
        <>
            {/* <Aside/> */}
            {/* <div className="card"> */}
            {/* hola mundo */}
            
            {/* cardNOO.CardBase */}
            
            <CardBase titulo={titulo} />

            {/* <CardBaseDos titulo={titulo} />  */}

            {/* </div> */}
        </>
    )
}

export default CardMedio
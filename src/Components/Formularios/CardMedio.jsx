import React, { useState } from "react";
import CardBase from "./PageTitle"
import CardBaseDos from "./CardBaseDos";
import Aside from "../Menu/Aside/Aside";
import RecepcionAnimal from "./Animales/RecepcionAnimal";


const CardMedio = () => {

    const [titulo, setTitulo] = useState({
        nombre: 1,
        title: "Soy un titulo",
        animal: 'animal'
        // } ,
        // title: "Ingreso de Animales",
    }); 
    // const { title, animal } = titulo

    return (
        <>
            {/* <CardBase titulo={titulo} /> */}
            {/* <RecepcionAnimal titulo={titulo} /> */}
        </>
    )
}

export default CardMedio
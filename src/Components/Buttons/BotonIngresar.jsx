import React from "react";
import './Buttons.scss';

const BotonIngresar  = ({ onClick, disabled = false }) => {
    return (
        // <Button
        //   className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-xl shadow"
        //   onClick={onClick}
        //   disabled={disabled} 
        // >
        //   Ingresar
        // </Button>

      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-xl shadow"
      onClick={onClick}
      disabled={disabled} >
        Ingresar
        </button> 
    )  
}

export default BotonIngresar 
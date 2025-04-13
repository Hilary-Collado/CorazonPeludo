import React from "react";
import "./Buttons.scss";

const ButtonEmparejamiento = ({ onClick, disabled = false }) => {
  return (
    <button
    className="w-80 h-12 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl shadow"
      type="button"
      onClick={onClick} 
      disabled={disabled}
    >
      Conocer mi compatibilidad!
    </button>
  );
};

export default ButtonEmparejamiento;

import React from "react";
import "./Buttons.scss";

const ButtonTestPersonalidad = ({ onClick }) => {
  return (
    <>
      {/* <button type="reset" className="btn bg-red-700 text-white buttonCancel button text-transform: capitalize">test de personalidad</button> */}
      <button
        type="button"
        onClick={onClick}
        className="btn btn-danger text-transform: capitalize"
      >
        Test de Personalidad
      </button>
    </>
  );
};

export default ButtonTestPersonalidad;

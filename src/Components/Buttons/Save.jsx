import React from "react";
import './Buttons.scss';

const Save = ({onClick}) => {
    return (
        <>
            <button type="submit" className="btn btn-primary buttonSave button" onClick={onClick}>Guardar</button>
        </>
    )
}

export default Save
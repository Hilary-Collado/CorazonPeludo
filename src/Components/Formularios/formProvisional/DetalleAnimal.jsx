import React from 'react';

import { Modal, Button } from "react-bootstrap";

const DetalleAnimal = ({ animal, cerrar }) => {


  return (
    <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{animal.nombre}</h5>
            <button type="button" className="btn-close" onClick={cerrar}></button>
          </div>
          <div className="modal-body">
            <p><strong>Descripción:</strong> {animal.descripcion || "No disponible"}</p>
            <p><strong>Compatibilidad:</strong> {Math.round(animal.porcentaje_compatibilidad)}%</p>
            <p><strong>Sexo:</strong> {animal.sexo}</p>
            <p><strong>Especie:</strong> {animal.especie}</p>
            {/* Puedes agregar más detalles aquí */}
          </div>
          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={cerrar}>
              Cerrar
            </button>
            <button className="btn btn-success">Solicitar adopción</button>
          </div>
        </div>
      </div>
    </div>
  );
};




export default DetalleAnimal;

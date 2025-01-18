import React, { useState, useEffect } from "react";

// const getDate = () => {
//   const MdToday = new Date();
//   const month = MdToday.getMonth() + 1;
//   const year = MdToday.getFullYear();
//   const date = MdToday.getDate();
//   //   return `${date}/${month}/${year}`;
//   document.getElementById(
//     "fechaModificacion"
//   ).value = `${year}-${month}-${date}`;
// };

const FechaModificacion = () => {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    // obten la fecha actual
    const today = new Date();

    // formatea la fecha en el formato dd-mm-yyyy 
    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const year = today.getFullYear();
    const formattedDate = `${day}-${month}-${year}`;
    setCurrentDate(formattedDate);
  }, []);

  return (
    <>
      <div className="col-md-6">
        <label for="fechaModificacion" className="form-label">
          Fecha de Modificacion
        </label>

        <input
          type="text"
          value={currentDate}
          id="fechaModificacion"
          className="form-control"
        disabled
        />
      </div>
    </>
  );
};

export default FechaModificacion;

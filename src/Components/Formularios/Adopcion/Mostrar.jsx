import React, { useState } from "react";
import { useForm } from "react-hook-form";
import HeaderAdmin from "../../Menu/Header/HeaderAdmin/HeaderAdmin";
import Aside from "../../Menu/Aside/Aside";
import PageTitle from "../../ComponentesRepetitivos/PageTitle";

import Save from "../../Buttons/Save";
import Clear from "../../Buttons/Clear";
import Cancel from "../../Buttons/Cancel";
import ButtonTestPersonalidad from "../../Buttons/ButtonTestPersonalidad";

import TestPersonalidadForm from "./TestPersonalidad";
import ModalSimple from "./ModalSimple";

import "../../Buttons/Buttons.scss";

const Mostrar = () => {
  const [registroAdoptante, setRegistroAdoptante] = useState({
    title: "Datos del Adoptante",
  });
  const { title } = registroAdoptante;

  const [showTestModal, setShowTestModal] = useState(false);
  const [testData, setTestData] = useState(null);

  const abrirModal = () => setShowTestModal(true);
  const cerrarModal = () => setShowTestModal(false);

  const guardarRespuestasTest = (data) => {
    setTestData(data);
    cerrarModal();
    console.log("✅ Respuestas del test:", data);
    // Puedes guardar esto junto con el formulario general si quieres
  };

  return (
    <>
      <HeaderAdmin />
      <Aside />

      <main id="main" className="main text-transform: capitalize">
        <PageTitle titulo={registroAdoptante} />
        <section className="section">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <h5 class="card-title titulo  mb-5">{title}</h5>

                  <form className="">
                    <div className="row  mb-5">
                      <div className="col-md-6 mb-3">
                        <div className="card">
                          <button className="btn btn-primary text-transform: capitalize">
                            Completar formulario
                          </button>
                        </div>
                      </div>
                      <div className="col-md-6 mb-3">
                        <div className="card">
                          <ButtonTestPersonalidad onClick={abrirModal} />
                        </div>
                      </div>
                    </div>

                    <ModalSimple isOpen={showTestModal} onClose={cerrarModal}>
                      <TestPersonalidadForm
                        onSubmitTest={guardarRespuestasTest}
                      />
                    </ModalSimple>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
export default Mostrar;

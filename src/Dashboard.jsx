import React, { useState } from "react";

import HeaderAdmin from "./Components/Menu/Header/HeaderAdmin/HeaderAdmin";
import Aside from "./Components/Menu/Aside/Aside";


import "./App.css";

const Dashboard = () => {

  return (
    <>
      <HeaderAdmin />
      <Aside />
      <main id="main" className="main">

        {/* <PageTitle titulo={registroCita} /> */}

        <section className="section">
          <div className="row">
            <div className="col-lg-12">

              <div className="card">
                <div className="card-body">
                  {/* <h5 class="card-title titulo">{title}</h5> */}
                  <h5 class="card-title titulo">dashboad</h5>

                  {/* <h3 class="card-title">Ingreso de Citas</h3> */}
                  <p className="background: bg-red-500 text-justify:center font-black">hola entraste</p>
      

                </div>
              </div>

            </div>

          </div>
        </section>

      </main>
    </>
  )
}

export default Dashboard
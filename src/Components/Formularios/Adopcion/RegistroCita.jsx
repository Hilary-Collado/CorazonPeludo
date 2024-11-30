import Save from '../../Buttons/Save';
import Clear from '../../Buttons/Clear';
import Cancel from '../../Buttons/Cancel';

const RegistroCita = () => {
  return (
    <>
      {/* <main id="main" class="main">

<div class="pagetitle">
  <h1>Registro de Citas</h1>
  <nav>
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="index.html">Home</a></li>
      <li class="breadcrumb-item">Formularios</li>
      <li class="breadcrumb-item active">Registro de citas</li>
    </ol>
  </nav>
</div> */}

      {/* <section class="section">
  <div class="row">
    <div class="col-lg-12">
*/}
      {/* <div class="card"> 
        <div class="card-body"> */}

      <h5 class="card-title">Ingreso de Citas</h5>

      <form class="needs-validation" id="citaForm" novalidate>

        <div class="row mb-3">
          <div class="col-md-6 mb-3">
            <label for="idCita" class="form-label">ID de la Cita</label>
            <input type="text" class="form-control" id="idCita" disabled />
          </div>
        </div>

        <div class="row mb-3">
          <div class="col-md-6 mb-3">
            <label for="name" class="form-label">Nombre del Solicitante</label>
            <input type="text" class="form-control" id="name" required />
          </div>

          <div class="col-md-6">
            <label for="apellido" class="form-label">Apellido del Solicitante</label>
            <input type="text" class="form-control" id="apellido" required />
          </div>
        </div>

        <div class="row mb-3">
          <div class="col-md-6 mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" required />
          </div>
          <div class="col-md-6 mb-3">
            <label for="telefono" class="form-label">Telefono</label>
            <input type="number" class="form-control" id="telefono" required />
          </div>
        </div>

        <div class="row mb-3">
          <div class="col-md-6 mb-3">
            <label for="mySelect" class="form-label">Tipo de Animal</label>
            <select id="mySelect" class="form-select" required>
              <option value="" disabled selected>Selecciona Una Opcion...</option>

            </select>
          </div>
          <div class="col-md-6">
            <label for="nombreAnimal" class="form-label">Nombre del animal (si aplica)</label>
            <input type="text" class="form-control" id="nombreAnimal" />
          </div>
        </div>

        <div class="row mb-3">
          <div class="col-md-6  mb-3">
            <label for="fechaCita" class="form-label">Fecha de la Cita</label>
            <input type="date" class="form-control" id="nombreAnimal" required data-disponible="" />
          </div>
          <div class="col-md-6">
            <label for="hora" class="form-label">Hora de la Cita</label>
            <input type="time" class="form-control" id="hora" required data-disponible="" />
          </div>
        </div>

        <div class="row mb-5">
          <div class="col-md-6 mb-3">
            <label for="status" class="form-label">Status</label>
            <select id="status" class="form-select" required>
              <option value="" disabled selected>Selecciona Una Opcion...</option>
              <option value="1">Activo</option>
              <option value="0">Inactivo</option>
            </select>
          </div>
          <div class="col-md-6">
            <label for="fechaModificacion" class="form-label">Fecha de Modificacion</label>
            <input type="date" id="fechaModificacion" class="form-control" disabled />
          </div>
        </div>



        <div className="buttons row mb-4">
          <section className="col-md-1"><Save /></section>
          <section className="col-md-1"><Clear /></section>
          <section className="col-md-1"><Cancel /></section>
        </div>



      </form>



      {/* </div>
      </div> */}
      {/*
    </div>

  </div>
</section>

</main> */}
    </>
  )
}

export default RegistroCita
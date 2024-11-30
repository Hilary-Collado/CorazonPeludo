import Save from '../../Buttons/Save';
import Clear from '../../Buttons/Clear';
import Cancel from '../../Buttons/Cancel';

const RegistroSolicitudAdopcion = () => {
    return (
        <>
            <h3 class="card-title">Ingreso de Solicitante de Adopción</h3>

            <form class="needs-validation" id="form" novalidate>
                <div class="row mb-3">
                    <div class="col-md-6 mb-3">
                        <label for="idSolicitante" class="form-label">ID Solicitante</label>
                        <input type="text" class="form-control" id="idSolicitante" disabled />
                    </div>

                    <div class="col-md-6 mb-3">
                        <label for="idAnimal" class="form-label">ID Animal</label>
                        <input type="text" class="form-control" id="idAnimal" disabled />
                    </div>
                </div>

                <div class="row mb-3">
                    <div class="col-md-6 mb-3">
                        <label for="nombre" class="form-label">Nombre</label>
                        <input type="text" class="form-control" id="nombre" required />
                    </div>
                    <div class="col-md-6">
                        <label for="apellido" class="form-label">Apellido</label>
                        <input type="text" class="form-control" id="apellido" required />
                    </div>
                </div>

                <div class="row mb-3">
                    <div class="col-md-6">
                        <label for="email" class="form-label">Email</label>
                        <input type="text" class="form-control" id="email" required />
                    </div>
                    <div class="col-md-6">
                        <label for="telefono" class="form-label">Telefono</label>
                        <input type="number" class="form-control" id="telefono" required />
                    </div>
                </div>

                <div class="row mb-3">
                    <div class="col-md-6 mb-3">
                        <label for="tipoDocumento" class="form-label">Tipo de documento</label>
                        <select id="tipoDocumento" class="form-select" required>
                            <option value="" disabled selected>Selecciona Una Opcion...</option>
                            <option value="1">Cedula</option>
                            <option value="0">Pasaporte</option>
                        </select>
                    </div>

                    <div class="col-md-6">
                        <label for="documento" class="form-label">Documento</label>
                        <input type="text" class="form-control" id="documento" />

                    </div>
                </div>

                <div class="row mb-4">
                    <div class="col-md-6 mb-3">
                        <label for="estadoCivil" class="form-label">Estado Civil</label>
                        <select id="estadoCivil" class="form-select" required>
                            <option value="" disabled selected>Selecciona Una Opcion...</option>
                            <option value="1">Casado/a</option>
                            <option value="0">Soltero/a</option>
                            <option value="0">En una relacion/a</option>
                            <option value="0">Divorsiado/a</option>
                        </select>
                    </div>
                    <div class="col-md-6 mb-3">
                        <label for="sexo" class="form-label">Sexo</label>
                        <select id="sexo" class="form-select" required>
                            <option value="" disabled selected>Selecciona Una Opcion...</option>
                            <option value="F">Femenino</option>
                            <option value="M">Masculino</option>
                            <option value="O">Otro</option>
                        </select>
                    </div>
                </div>

                <hr class="bg-danger border-2 border-top border-primary-subtle" />

                <div class="row mb-3">
                    <div class="col-md-6 mb-3" id="campoNumPersonas">
                        <label for="numeroPersonas" class="form-label">Numero de personas que viven en el hogar</label>
                        <input type="number" class="form-control" id="numeroPersonas" required
                            onchange="cantidadPersonas()" />
                    </div>
                    <div class="col-md-6 mb-3" id="campoConocer">
                        <label for="conocerAceptacion" class="form-label">¿Están todos los miembros de la familia enterados
                            de la adopción?</label>
                        <select id="conocerAceptacion" class="form-select" required>
                            <option value="" disabled selected>Selecciona Una Opcion...</option>
                            <option value="Si">Si</option>
                            <option value="No">No</option>

                        </select>
                    </div>
                </div>

                <div class="row mb-3">
                    <div class="col-md-6 mb-3">
                        <label for="situacionFamiliar" class="form-label">Situación Familiar</label>
                        <input type="text" class="form-control" id="situacionFamiliar" placeholder="Buena..." required />
                    </div>
                    <div class="col-md-6">
                        <label for="ingresosMensuales" class="form-label">ingresos Mensuales</label>
                        <input type="number" class="form-control" id="ingresosMensuales" required />
                    </div>
                </div>

                <div class="row mb-3">
                    <div class="col-md-6 mb-3" id="campoDependo">
                        <label for="dependencia" class="form-label">¿Depende económicamente de otros?</label>
                        <select id="dependencia" class="form-select" required onchange="activar()">
                            <option value="" disabled selected>Selecciona Una Opcion...</option>
                            <option value="Si">Si</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                    <div class="col-md-6" id="campoDepen">
                        <label for="soyDependiente" class="form-label">¿De quien depende?</label>
                        <input type="text" class="form-control" id="soyDependiente" required placeholder="Mi madre..." />
                    </div>
                </div>



                <div class="row mb-3">
                    <div class="col-md-6 mb-3" id="campoDependiente">
                        <label for="dependientes" class="form-label">¿Tiene dependientes?</label>
                        <select id="dependientes" class="form-select" required onchange="activarDependientes()">
                            <option value="" disabled selected>Selecciona Una Opcion...</option>
                            <option value="Si">Si</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                    <div class="col-md-6" id="campoDependientes">
                        <label for="numeroDependientes" class="form-label">Cantidad de dependientes</label>
                        <input type="number" class="form-control" id="numeroDependientes" required />
                    </div>
                </div>


                <div class="row mb-3">
                    <div class="col-md-6 mb-3">
                        <label for="actividadEconomica" class="form-label">Actividad Económica</label>
                        <input type="text" class="form-control" id="actividadEconomica" required
                            placeholder="Estudiante, Maestro..." />
                    </div>

                    <div class="col-md-6">
                        <label for="fechaIngreso" class="form-label">Fecha De Inicio</label>
                        <input type="date" id="fechaIngreso" class="form-control" required />
                    </div>
                </div>

                <hr class="bg-danger border-2 border-top border-primary-subtle" />

                <div class="row mb-3">
                    <div class="col-md-6 mb-3" id="campoNinos">
                        <label for="ninos" class="form-label">¿Tiene niños en casa?</label>
                        <select id="ninos" class="form-select" required onchange="activarCantNinos()">
                            <option value="" disabled selected>Selecciona Una Opcion...</option>
                            <option value="Si">Si</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                    <div class="col-md-6" id="campoCantidadNinos">
                        <label for="cantidadNinos" class="form-label">¿Cuantos?</label>
                        <input type="number" class="form-control" id="cantidadNinos" required
                            onchange="generarCamposEdadNinos()" />
                    </div>
                </div>

                <div id="camposEdadNinos"></div>


                <hr class="bg-danger border-2 border-top border-primary-subtle" />

                <div class="row mb-3">
                    <div class="col-md-6 mb-3" id="campoOtrosAnimales">
                        <label for="otrosAnimales" class="form-label">¿Tiene otros animales en casa?</label>
                        <select id="otrosAnimales" class="form-select" required onchange="activarOtrosAnimales()">
                            <option value="" disabled selected>Selecciona Una Opcion...</option>
                            <option value="Si">Si</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                    <div class="col-md-6" id="campoCantidad">
                        <label for="cantidadOtrosAnimales" class="form-label">¿Cuantos?</label>
                        <input type="number" class="form-control" id="cantidadOtrosAnimales" required />
                    </div>
                </div>


                <div class="row mb-3">
                    <div class="col-md-6 mb-3" id="campoVacunados">
                        <label for="vacunados" class="form-label">¿Están vacundos?</label>
                        <select id="vacunados" class="form-select" required onchange="activarOtrosAnimales()">
                            <option value="" disabled selected>Selecciona Una Opcion...</option>
                            <option value="Si">Si</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                    <div class="col-md-6 mb-3" id="campoDesparasitados">
                        <label for="desparasitados" class="form-label">¿Están desparasitados?</label>
                        <select id="desparasitados" class="form-select" required onchange="activarOtrosAnimales()">
                            <option value="" disabled selected>Selecciona Una Opcion...</option>
                            <option value="Si">Si</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                </div>


                <div class="row mb-3">
                    <div class="col-md-6 mb-3" id="campoEsterilizados">
                        <label for="esterilizados" class="form-label">¿Están esterilizados?</label>
                        <select id="esterilizados" class="form-select" required onchange="activarOtrosAnimales()">
                            <option value="" disabled selected>Selecciona Una Opcion...</option>
                            <option value="Si">Si</option>
                            <option value="No">No</option>
                        </select>
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


        </>
    )
}

export default RegistroSolicitudAdopcion;
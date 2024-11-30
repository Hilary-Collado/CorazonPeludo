import Save from '../../Buttons/Save';
import Clear from '../../Buttons/Clear';
import Cancel from '../../Buttons/Cancel';

const RegistroAlmacen = () => {
    return (
        <>
            <h5 class="card-title">Ingreso a Almacen</h5>
            <form class="needs-validation" id="form" novalidate>

                <div class="row mb-3">
                    <div class="col-md-6 mb-3">
                        <label for="idAlmacen" class="form-label">ID Almacen</label>
                        <input type="text" class="form-control" id="idAlmacen" disabled />
                    </div>

                    <div class="col-md-6">
                        <a href="../tercero/registroSucursal.html">Crear nueva</a>
                        <label for="sucursal" class="form-label">Sucursal</label>
                        <select id="sucursal" class="form-select" required>
                            <div id="data-display">Selecciona Una Opcion...</div>
                        </select>
                    </div>
                </div>


                <div class="row mb-3">
                    <div class="col-md-6 mb-3">
                        <label for="tipoAlmacen" class="form-label">Tipo De Almacen</label>
                        <select id="tipoAlmacen" class="form-select" required>
                            <option value="" disabled selected>Selecciona Una Opcion...</option>
                            <option value="Alimento">Alimento</option>
                            <option value="Medicina">Medicina</option>
                            <option value="Productos de limpieza">Productos de limpieza</option>
                            <option value="Combustible">Combustible</option>
                        </select>
                    </div>
                    <div class="col-md-6 mb-3">
                        <label for="capacidad" class="form-label">Capacidad</label>
                        <input type="text" class="form-control" id="capacidad" required />
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
            </form>
        </>
    )
}
export default RegistroAlmacen;
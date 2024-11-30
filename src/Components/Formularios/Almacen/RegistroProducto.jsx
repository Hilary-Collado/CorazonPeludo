import Save from '../../Buttons/Save';
import Clear from '../../Buttons/Clear';
import Cancel from '../../Buttons/Cancel';

const RegistroProducto = () => {
    return (
        <>
            <h5 class="card-title">Ingreso De producto</h5>

            <form class="needs-validation" novalidate>

                <div class="row mb-3">
                    <div class="col-md-6 mb-3">
                        <label for="idProducto" class="form-label">ID Producto</label>
                        <input type="text" class="form-control" id="idProducto" disabled />
                    </div>
                </div>

                <div class="row mb-3">
                    <div class="col-md-6">
                        <label for="nombre" class="form-label">Nombre</label>
                        <input type="text" class="form-control" id="nombre" required />
                    </div>
                    <div class="col-md-6">
                        <label for="lote" class="form-label">Lote</label>
                        <input type="text" class="form-control" id="lote" required />
                    </div>
                </div>


                <div class="row mb-3">
                    <div class="col-md-6">
                        <label for="marca" class="form-label">Marca</label>
                        <input type="text" class="form-control" id="marca" required />
                    </div>


                    <div class="col-md-6">
                        <label for="costo" class="form-label">Costo</label>
                        <input type="number" class="form-control" id="costo" required />
                    </div>
                </div>

                <div class="row mb-3">
                    <div class="col-md-6 mb-3">
                        <label for="tipoProducto" class="form-label">Tipo de Producto</label>
                        <input type="text" class="form-control" id="tipoProducto" required />
                    </div>

                    <div class="col-md-6">
                        <label for="fechaVencimiento" class="form-label">Fecha De Vencimiento</label>
                        <input type="date" id="fechaVencimiento" class="form-control" required />
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


                <div class="text-center mb-3">
                    <button type="submit" id="buttonSubmit" class="btn btn-primary buttonSubmit">Enviar</button>
                    <button type="reset" class="btn btn-outline-danger">Limpiar</button>
                </div>

            </form>

        </>
    )
}

export default RegistroProducto;
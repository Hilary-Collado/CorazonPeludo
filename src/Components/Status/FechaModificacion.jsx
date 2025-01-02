const FechaModificacion = () => {
    return (
        <>
            <div className="col-md-6">
                <label for="fechaModificacion" className="form-label">Fecha de Modificacion</label>
                <input type="date" id="fechaModificacion" className="form-control" disabled />
            </div>
        </>
    )
}

export default FechaModificacion
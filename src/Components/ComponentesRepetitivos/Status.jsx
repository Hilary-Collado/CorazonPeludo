const Status = () => {
    return (
        <>
            <div className="col-md-6 mb-3">
                <label for="status" className="form-label">Status</label>
                <select id="status" className="form-select" required>
                    <option value="" disabled selected>Selecciona Una Opcion...</option>
                    <option value="1">Activo</option>
                    <option value="0">Inactivo</option>
                </select>
            </div>
        </>
    )
}

export default Status
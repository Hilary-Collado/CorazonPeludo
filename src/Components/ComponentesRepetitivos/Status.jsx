const Status = ({value, onChange}) => {
    return (
        <>
            <div className="col-md-6 mb-3">
                <label for="status" className="form-label">Status</label>
                <select id="status" className="form-select" value={value} onChange={(e) => onChange(e.target.value)}>
                    <option value="1" selected>Activo</option>
                    <option value="0">Inactivo</option>
                </select> 
            </div>
        </>
    )
}

export default Status
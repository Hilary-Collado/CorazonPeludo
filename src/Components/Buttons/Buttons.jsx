class Button{
    constructor(){
        this.Save
    }

    Save () {
        
        // return (
            // <>
                <button type="submit" className="btn btn-primary buttonSave">Guardar</button>
                
            // </>
        // )
    }


    Cancel = () =>{
        return(
            <>
            <button type="submit" className="btn btn-danger buttonCancel">Cancelar</button>
            </>
        )
    }
    
}

export default Button
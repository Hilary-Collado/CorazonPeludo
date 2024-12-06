// import '../../../App.css'
import '../../App.css'

const CardBase = ({todo}) => {
    const {title } = todo
    return (
        <>
            <div class="pagetitle">
                <h1>{title}</h1>
                <nav> 
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="">Home</a></li>
                        <li class="breadcrumb-item">Formularios</li>
                        <li class="breadcrumb-item active">{title}</li>
                    </ol>
                </nav>
            </div>
            {/* <!-- End Page Title --> */}
        </>

    )

}

export default CardBase
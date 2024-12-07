// import '../../../App.css'
import '../../App.css'
import RecepcionAnimal from './Animales/RecepcionAnimal' 

const CardBase = ({titulo}) => {
    // const { title, nombre, animal } = titulo
    const {title } = titulo

        return (
            <>
            <div className="pagetitle">
                <h1>{title}</h1>
                <nav> 
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="">Home</a></li>
                        <li className="breadcrumb-item">Formularios</li>
                        <li className="breadcrumb-item active">{title}</li>
                    </ol>
                </nav> 
            </div>
            {/* <!-- End Page Title --> */}
            {/* <RecepcionAnimal titulo={titulo} /> */}
        </>

    )
}


export default CardBase



// const CardBase = ({titulo}) => {
//     const { title } = titulo
      
//     return (
//         <>
//             <div className="pagetitle">
//                 <h1>{title}</h1>
//                 <nav> 
//                     <ol className="breadcrumb">
//                         <li className="breadcrumb-item"><a href="">Home</a></li>
//                         <li className="breadcrumb-item">Formularios</li>
//                         <li className="breadcrumb-item active">{title}</li>
//                     </ol>
//                 </nav>
//             </div>
//             {/* <!-- End Page Title --> */}
//         </>

//     )
// }
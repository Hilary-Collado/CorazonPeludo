// import '../../../App.css'
import '../../App.css'

const PageTitle = ({titulo}) => {
    
    const {title } = titulo

        return (
            <>
            <div className="pagetitle titulo">
                <h1 className=''>{title}</h1>
                <nav> 
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="">Home</a></li>
                        <li className="breadcrumb-item">Formularios</li>
                        <li className="breadcrumb-item active ">{title}</li>
                    </ol>
                </nav> 
            </div>
            {/* <!-- End Page Title --> */}
            
        </>

    )
}


export default PageTitle



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
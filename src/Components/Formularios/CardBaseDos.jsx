import '../../App.css'

const CardBaseDos = ({ titulo }) => {
    const { title } = titulo
    return (
        <>
            <ul id="animales-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                <li>
                    <a href="">
                        <i className="bi bi-circle"></i><span>{title}</span>
                    </a>
                </li>
            </ul>
        </>

    )
}

export default CardBaseDos
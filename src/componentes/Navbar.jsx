import { Link } from "react-router-dom";
import "../estilos/Navbar.css"

function Navbar(){
    return (
        <nav className="nav-container">
            <Link className="link-nav" to="/">Inicio</Link>
            <Link className="link-nav" to="/sobremi">Sobre mi</Link>
            <Link className="link-nav" to="/proyectos">Experiencia</Link>

            <Link className="link-nav" to="/estudios">Estudios</Link>

            <Link className="link-nav" to="/contacto">Contacto</Link>

        </nav>
    )
}


export default Navbar;
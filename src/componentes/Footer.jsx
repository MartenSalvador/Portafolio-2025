import { Link } from "react-router-dom";
import { FaSquareGithub, FaLinkedin  } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa";
import '../estilos/Footer.css'

function Footer(){
   return(
        <footer>
            <div className="container-footer">
                <div>
                    <Link className="link-footer" to="/">Inicio</Link>
                </div>
                <p className="p-link"><FaRegCopyright/> Martin Salvador - Frontend Developer</p>
                <div className="redes-footer">
                    <a href="https://www.linkedin.com/in/martinandressalvador/"  target="_blank"><FaLinkedin className="logo-redes" /></a>
                    
                    <a href="https://github.com/MartenSalvador" target="_blank"><FaSquareGithub className="logo-redes"  /></a>
                </div>
                
            </div>
            
            
        </footer>
   )
}



export default Footer;
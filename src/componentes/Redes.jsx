import '../estilos/Redes.css';
import { FaSquareGithub, FaLinkedin  } from "react-icons/fa6";



function Redes(){
    return(
        <div className='container-redes'>

            <h2 className='titulo-redes'>Redes</h2>
            <div className='container-redes-logos'>
                 <a href="https://www.linkedin.com/in/martinandressalvador/"  target="_blank" className='a-redes'><FaLinkedin className="logo-contacto" /></a>
                    
                    <a href="https://github.com/MartenSalvador" target="_blank"><FaSquareGithub className="logo-contacto"  /></a>
                </div>
            </div>
          
       
    );
}



export default Redes;
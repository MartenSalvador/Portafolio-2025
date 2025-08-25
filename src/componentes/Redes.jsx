import '../estilos/Redes.css';
import { FaSquareGithub, FaLinkedin  } from "react-icons/fa6";



function Redes(){
    return(
        <div className='container-redes'>
            <h2 className='titulo-home tit-about'>Redes</h2>
            <div className='container-redes-logos'>
                 <a href="https://www.linkedin.com/in/martinandressalvador/"  target="_blank"><FaLinkedin className="logo-redes about" /></a>
                    
                    <a href="https://github.com/MartenSalvador" target="_blank"><FaSquareGithub className="logo-redes about"  /></a>
                </div>
            </div>
          
       
    );
}



export default Redes;
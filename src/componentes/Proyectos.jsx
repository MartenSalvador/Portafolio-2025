import '../estilos/Proyectos.css'
import { FaSquareGithub  } from "react-icons/fa6";

import hotel from '../assets/hotel.png'
import glosario from '../assets/glosario.png'
import encriptador from '../assets/encriptador.png'
import PPT from '../assets/PPT.png'
import numerosecreto from '../assets/numerosecreto.png'
import org from '../assets/org.png'
import aluraflix from '../assets/aluraflix.png'
import troqueles from '../assets/troqueles.png'

const imagenes = {
    hotel,
    glosario,
    encriptador,
    PPT,
    numerosecreto,
    org,
    aluraflix,
    troqueles
}
function Proyectos({ empresa, titulo, texto, deploy, imagen, repo }){
    return(
        
            <div className='proyecto-container'>
            <ul>
                <li className='proyecto-li'>
                    <div className='proyecto-tarjeta-container-img-dploy'>
                        <h2 className='proyecto-empresa'>{empresa}</h2>
                        <h3 className='proyecto-titulo'>{titulo}</h3>
                        <p className='proyecto-descripcion'>{texto}</p>
                    </div>

                    <div className='proyecto-tarjeta-container-img-dploy minicontainer'>
                        <div className='botonera-proyectos'>
                            <a className='proyecto-boton' href={`https://github.com/MartenSalvador/${repo}`} target='_blank' >Repositorio <FaSquareGithub /></a>
                            <a className='proyecto-boton deploy' href={deploy} target='_blank' >Deploy</a>

                        </div>
                        
                        <img src={imagenes[imagen]}
                        className='proyecto-imagen'  
                        alt='logo'/>
                    </div>
                    
                    
                </li>
               
            </ul>
        </div>
        
    );
}


export default Proyectos;
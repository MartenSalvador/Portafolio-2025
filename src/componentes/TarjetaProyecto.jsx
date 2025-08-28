

import { Link } from "react-router-dom";
import '../estilos/Experiencia.css';
import hotel from '../assets/hotel.png';
import troqueles from '../assets/troqueles.png';

const imagenes = {
    hotel,
    troqueles

}


function TarjetaProyecto( {empresa, skills, proyecto, link, imagen} ){
    return(
        <div className='experiencia-tarjeta'>

            <div><img className="experiencia-imagen" src={[imagenes[imagen]]} alt={`Miniatura del proyecto ${proyecto}`} /></div>

            <div>                    
                <h2 className='experiencia-subtitulo'>Empresa: {empresa}</h2>
                    <p className='experiencia-texto'>Tecnologias: {skills}</p>
                    <p className='experiencia-texto'>Proyecto: {proyecto}</p>
                    
                    <Link to={`/${link}`} className='experiencia-link'>{proyecto}</Link>

            </div>
                    


        </div>
    );
}


export default TarjetaProyecto;
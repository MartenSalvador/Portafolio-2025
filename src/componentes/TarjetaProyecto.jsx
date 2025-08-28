

import { Link } from "react-router-dom";
import '../estilos/Experiencia.css';
import hotel from '../assets/hotel.png';
import troqueles from '../assets/troqueles.png';
import glosario from '../assets/glosario.png';
import numerosecreto from '../assets/numerosecreto.png';
import PPT from '../assets/PPT.png';
import org from '../assets/org.png';
import aluraflix from '../assets/aluraflix.png';
import encriptador from '../assets/encriptador.png';

const imagenes = {
    hotel,
    troqueles,
    glosario,
    numerosecreto,
    PPT,
    org,
    aluraflix,
    encriptador
}


function TarjetaProyecto({ empresa, skills, proyecto, link, imagen }) {
    return (
        <div className='experiencia-tarjeta'>

            <div>
                <Link to={`/${link}`} ><img className="experiencia-imagen" src={[imagenes[imagen]]} alt={`Miniatura del proyecto ${proyecto}`} /></Link>

                <h2 className='experiencia-subtitulo'>{proyecto}</h2>
                <p className='experiencia-texto'>Empresa:  {empresa}</p>
                <p className='experiencia-texto'>{skills}</p>
            </div>

            <div>
                <Link to={`/${link}`} className='experiencia-link'>Abrir</Link>

            </div>



        </div>
    );
}


export default TarjetaProyecto;
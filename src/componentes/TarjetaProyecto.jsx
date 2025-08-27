

import { Link } from "react-router-dom";
import '../estilos/Experiencia.css'



function TarjetaProyecto( {empresa, skills, proyecto, link} ){
    return(
        <div className='experiencia-tarjeta'>
                    <h2 className='experiencia-subtitulo'>Empresa: {empresa}</h2>
                    <p className='experiencia-texto'>Desarrollador Frontend</p>
                    <p className='experiencia-texto'>Tecnologias: {skills}</p>
                    <p className='experiencia-texto'>Proyecto: {proyecto}</p>
                    <Link to={`/${link}`} className='experiencia-link'>{proyecto}</Link>


                </div>
    );
}


export default TarjetaProyecto;
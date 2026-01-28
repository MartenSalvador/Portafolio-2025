

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
import fiambreria from '../assets/fiambreria.png';
import { useTranslation } from "react-i18next";


const imagenes = {
    hotel,
    troqueles,
    glosario,
    numerosecreto,
    PPT,
    org,
    aluraflix,
    encriptador,
    fiambreria
}


function TarjetaProyecto({ empresa, skills, proyecto, link, imagen }) {
    const { t } = useTranslation();
    return (
        <div className='experiencia-tarjeta'>

            <div>
                <Link to={`/${link}`} ><img className="experiencia-imagen" src={[imagenes[imagen]]} alt={`Miniatura del proyecto ${proyecto}`} /></Link>

                <h2 className='experiencia-subtitulo'>{proyecto}</h2>
                <p className='experiencia-texto'>{t("experience.company")}:  {empresa}</p>
                <p className='experiencia-texto'>{skills}</p>
            </div>

            <div>
                <Link to={`/${link}`} className='experiencia-link'>{t("experience.boton")}</Link>

            </div>



        </div>
    );
}


export default TarjetaProyecto;
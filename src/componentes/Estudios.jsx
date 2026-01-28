import Header from "./Header";
import Formacion from './Formacion';
import { useTranslation } from "react-i18next";
import '../estilos/Estudios.css';

function Estudios(){
    const { t } = useTranslation();
    return(
        <div className="estudios-container">
            <Header />
            <div className="estudios-contenido">
             <h1 className="contacto-titulo">
                {t("studies.title")}
            </h1>
            <div className="estudios-container-tarjetas">
            <a href="">
                 <Formacion 
                texto="underc0de | Happyprogrammer"
                imagen="hapyprogrammer"
                titulo="SQL Essentials"
                />
            </a>
            
            <a target="_blank" href="https://app.aluracursos.com/degree/certificate/d58b7333-d176-4b85-9356-ec2d429c5ce3?lang=es">
                <Formacion 
                texto="One Oracle | Alura Latam"
                imagen="alura"
                titulo="React"
                 />
            </a>
             
            <a target="_blank" href="https://www.linkedin.com/in/martinandressalvador/details/certifications/962981242/multiple-media-viewer/?profileId=ACoAADSZXz4Bj_1YgId1nSOgDE7lhIKOEXIY4sg&treasuryMediaId=1731834802412">
                 <Formacion 
                texto="One Oracle | Alura Latam"
                imagen="alura"
                titulo="FrontEnd"
                />
            </a>

            <a target="_blank" href="https://www.linkedin.com/in/martinandressalvador/details/certifications/1711805389291/single-media-viewer/?profileId=ACoAADSZXz4Bj_1YgId1nSOgDE7lhIKOEXIY4sg">
                <Formacion 
                texto="Ademass Training Development"
                imagen="ademass"
                titulo="JavaScript"
                />
            </a>
            
            <a target="_blank" href="https://www.linkedin.com/in/martinandressalvador/details/certifications/1635551223535/single-media-viewer/?profileId=ACoAADSZXz4Bj_1YgId1nSOgDE7lhIKOEXIY4sg">
                <Formacion 
                texto="freeCodeCamp"
                imagen="freecodecamp"
                titulo="Responsive Web Design"
                />
            </a>
            </div>
             
            </div>
            
        </div>
    );
}



export default Estudios;

import Header from './Header'
import '../estilos/Experiencia.css'
import { Link } from "react-router-dom";
import TarjetaProyecto from './TarjetaProyecto';
import { useTranslation } from "react-i18next";


function Experiencia(){
    const { t } = useTranslation();
    return(
        <div>
        <Header />
        <div className='experiencia-container'>
            <h1 className='experiencia-titulo'>{t("experience.subtitle1")}</h1>
            
            <div className='experiencia-empresas'>
                <TarjetaProyecto 
                empresa="El Carmelo charcutería"
                skills="React, JavaScript, CSS, HTML"
                proyecto= {t("experience.fiambreria")}
                link="fiambreria"
                imagen="fiambreria"
                />
                <TarjetaProyecto 
                empresa="Hotel The Niu Crusoe Bremen"
                skills="React, JavaScript, CSS, HTML"
                proyecto={t("experience.administrador")}
                link="administrador"
                imagen="hotel"
                />
                <TarjetaProyecto 
                empresa="Imprenta Encabo SRL"
                skills="React, JavaScript, CSS, HTML"
                proyecto={t("experience.troqueles")}
                link="troqueles"
                imagen="troqueles"
                />
            </div>

            <h1 className='experiencia-titulo'>{t("experience.subtitle2")}</h1>
            <div className='experiencia-empresas'>
                <TarjetaProyecto 
                empresa="Challene Alura Latam"
                skills="JavaScript, CSS, HTML"
                proyecto={t("experience.glosario")}
                link="glosario"
                imagen="glosario"
                />
                <TarjetaProyecto 
                empresa="Challene Alura Latam"
                skills="JavaScript, CSS, HTML"
                proyecto={t("experience.numerosecreto")}
                link="numerosecreto"
                imagen="numerosecreto"
                />
                <TarjetaProyecto 
                empresa="Challene Alura Latam"
                skills="JavaScript, CSS, HTML"
                proyecto={t("experience.encriptador")}
                link="encriptador"
                imagen="encriptador"
                />
                <TarjetaProyecto 
                empresa="Challene Alura Latam"
                skills="JavaScript, CSS, HTML"
                proyecto="Aluraflix"
                link="aluraflix"
                imagen="aluraflix"
                />
                <TarjetaProyecto 
                empresa="Challene freeCodeCamp"
                skills="JavaScript, CSS, HTML"
                proyecto={t("experience.ppt")}
                link="ppt"
                imagen="PPT"
                />
                <TarjetaProyecto 
                empresa="Challene Alura Latam"
                skills="JavaScript, CSS, HTML"
                proyecto={t("experience.org")}
                link="org"
                imagen="org"
                />
            </div>
        </div> 
        </div>
       
    );
}



export default Experiencia;
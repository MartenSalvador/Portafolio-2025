import '../estilos/Sobremi.css'
import yoni from '../assets/yoni.jpg'
import { useTranslation } from "react-i18next";
import { Code, Coffee, Heart } from 'lucide-react';


function Sobremi() {
  const { t } = useTranslation();
  return (
    <div className='about-container'>

      <div className='sobremi-contenido'>
        <div  >
          <div className='div-titulo'>
            <h2 className='sobremi-subtitulo'>{t("about.title")}</h2>
            <div className="barra"></div>
          </div>

          <div className='about-grid'>
            {/*Descripcion */}
            <div className='text-block'>
              {/*<img src={yoni} alt="Foto de Martín Salvador" className='yoni' />*/}
              <p className='text-paragraph'>{t("about.description1")}</p>
              <p className='text-paragraph'>{t("about.description2")}</p>
              <p className='text-paragraph'>{t("about.description3")}</p>
            </div>
            {/*info cards */}
            <div className='cards'>
              
                <div className="info-card">
                  <div><Code className="icon-wrapper icon-purple"  /></div>
                  <div className='card-content'>
                    <h3 className="card-title">{t("about.infoCard1Title")}</h3>
                    <p className="card-text">{t("about.infoCard1Text")}</p>
                  </div>
                </div>
                <div className="info-card">
                  <div><Coffee className="icon-wrapper icon-indigo" /></div>
                  <div className='card-content'>
                    <h3 className="card-title">{t("about.infoCard2Title")}</h3>
                    <p className="card-text">{t("about.infoCard2Text")}</p>
                  </div>
                </div>
                <div className="info-card">
                  <div><Heart className="icon-wrapper icon-pink" /></div>
                  <div className='card-content'>
                    <h3 className="card-title">{t("about.infoCard3Title")}</h3>
                    <p className="card-text">{t("about.infoCard3Text")}</p>
                  </div>
                </div>
              

            </div>

          </div>
        </div>

      </div>


    </div>

  )



}
export default Sobremi;

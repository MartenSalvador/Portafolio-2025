import '../estilos/Sobremi.css'
import yoni from '../assets/yoni.jpg'
import Header from './Header';
import { useTranslation } from "react-i18next";


function Sobremi() {
  const { t } = useTranslation();
  return (
    <div className='about-container'>
      <Header />

      <div className='sobremi-contenido'>
        <div >
        <h2 className='sobremi-subtitulo'>{t("about.title")}</h2>
        <p className='sobremi-descripcion'>{t("about.description")}</p>
      </div>
      <div>
        <img className='yoni' src={yoni} alt="yoni" />
      </div>
      </div>
      
      
    </div>
    
  )
  
  
  
}
export default Sobremi;

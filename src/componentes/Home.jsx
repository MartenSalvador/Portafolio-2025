import '../estilos/Home.css'
import Header from './Header';
import { Link } from "react-router-dom";
import Habilidades from './Habilidades'
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();
  return ( 
    
    <div className='home-container'  >
        <div className='home-contenido'>
          
           
         
        <h1 className='home-titulo'>Martín Salvador</h1>
        <h2 className='home-subtitulo'>Frontend Developer</h2>
        <p className='home-descripcion'>{t("home.description")}</p>
        <div className='home-botones'>
          <Link className='home-boton proyectos' to='/proyectos'>{t("home.btnProjects")}</Link>
          <Link className='home-boton' to='/contacto'>{t("home.btnContact")}</Link>
        </div>
        

      </div>
      <Habilidades />
      
    </div>
  );

}
export default Home;

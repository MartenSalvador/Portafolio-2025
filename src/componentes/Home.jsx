import '../estilos/Home.css'
import Header from './Header';
import { Link } from "react-router-dom";
import Habilidades from './Habilidades'

function Home() {
  return ( 
    <div className='home-container'  >
      <Header />
      <div className='home-contenido'>
        <h1 className='home-titulo'>Martín Salvador</h1>
        <h2 className='home-subtitulo'>Frontend Developer</h2>
        <p className='home-descripcion'>Transformo ideas en interfaces claras y efectivas</p>
        <div className='home-botones'>
          <Link className='home-boton proyectos' to='/contacto'>Ver Proyectos</Link>
          <Link className='home-boton' to='/contacto'>Contacto</Link>
        </div>
        

      </div>
      <Habilidades />
      
    </div>
  );

}
export default Home;

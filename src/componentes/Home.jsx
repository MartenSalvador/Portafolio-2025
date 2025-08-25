import '../estilos/Home.css'
import Header from './Header';
import { Link } from "react-router-dom";
import Habilidades from './Habilidades'

function Home() {
  return ( 
    <div className='home-container'  >
      <Header />
      <div className='home-contenido'>
        <h1 className='home-titulo'>FRONTEND DESIGNER</h1>
        <h2 className='home-subtitulo'>Martin Salvador</h2>
        <p className='home-descripcion'>Desarrollador FrontEnd</p>
        <Link className='home-boton-contacto' to='/contacto'>Contactar</Link>
      </div>
      <Habilidades />
      
    </div>
  );

}
export default Home;

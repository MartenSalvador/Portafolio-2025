import '../estilos/Contacto.css';

import Header from './Header'
import Redes from './Redes'


function Contacto(){
    return(
        <div className='contacto-container'>
          <Header />
          <div className='contacto-container-form'>
            <h1 className='contacto-titulo'>Contacto</h1>
            <form className='contacto-form'>
              <input className='contacto-input' type="text" placeholder='Nombre'/>
              <input className='contacto-input' type="email" placeholder='email' />
              <textarea className='contacto-input mensaje' name="mensaje" id="mensaje" placeholder='Mensaje'></textarea>
              <button className='contacto-boton' type='submit'>Enviar</button>
            </form>
            <Redes />
          </div>
          
        </div>
    );
}



export default Contacto;

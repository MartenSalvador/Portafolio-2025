import '../estilos/Contacto.css';

import Header from './Header'
import Redes from './Redes'
import ContactForm from './ContactForm';

function Contacto(){
    return(
        <div className='contacto-container'>
          <Header />
          <div className='contacto-container-form'>
            <h1 className='contacto-titulo'>Contacto</h1>
            <ContactForm />
            <Redes />
          </div>
          
        </div>
    );
}



export default Contacto;




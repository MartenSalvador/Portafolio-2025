import '../estilos/Formacion.css'
import alura from '../assets/alura.png';
import freecodecamp from '../assets/freeCodeCamp.png';
import hapyprogrammer from '../assets/happyprogrammer.png';
import ademass from '../assets/ademass.png';
const imagenes = {
    alura,
    freecodecamp,
    hapyprogrammer,
    ademass
}

function Formacion( {titulo, texto, imagen } ){
    return (
        <div className='formacion-container'>
            <ul>
                <li className='formacion-li'>
                    <h2 className='li-subtitulo'>{titulo}</h2>
                    <p className='li-descripcion'>{texto}</p>
                    <img src={imagenes[imagen]}
                        className='formacion-imagen'  
                        alt='Logo del centro de formación'/>
                </li>
               
            </ul>
        </div>
    );
}


 

export default Formacion;
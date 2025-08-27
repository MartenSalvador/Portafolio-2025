import '../estilos/Sobremi.css'
import yoni from '../assets/yoni.jpg'
import Header from './Header';

function Sobremi() {
  return (
    <div className='about-container'>
      <Header />

      <div className='sobremi-contenido'>
        <div >
        <h2 className='sobremi-subtitulo'>Sobre mi</h2>
        <p className='sobremi-descripcion'>Soy Martín Salvador un amante de la programación. Comencé a estudiar de forma autodidacta y como un pasatiempo la manera de hacer páginas web y poco a poco fui adquiriendo más conocimientos hasta que me decidí a dedicarme a esto. Tengo certificados de varios cursos y botcamps con conociemientos avanzados en React, HMTL5, CSS3, JavaScript, SQL, GitHub y Figma . Cuento con las herramientas necesarias para crear paginas y aplicaciones web responsivas para lo que usted desee. No dude en consultarme, si usted tiene una idea yo se la hago realidad.</p>
      </div>
      <div>
        <img className='yoni' src={yoni} alt="yoni" />
      </div>
      </div>
      
      
    </div>
    
  )
  
  
  
}
export default Sobremi;

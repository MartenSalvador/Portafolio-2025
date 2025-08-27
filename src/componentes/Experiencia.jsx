
import Header from './Header'
import '../estilos/Experiencia.css'
import { Link } from "react-router-dom";
import TarjetaProyecto from './TarjetaProyecto';

function Experiencia(){
    return(
        <div>
        <Header />
        <div className='experiencia-container'>
            <h1 className='experiencia-titulo'>Proyectos con empresas</h1>
            
            <div className='experiencia-empresas'>
                <TarjetaProyecto 
                empresa="Hotel The Niu Crusoe Bremen"
                skills="React, JavaScript, CSS, HTML"
                proyecto="Administrador de Tareas"
                link="administrador"
                />
                <TarjetaProyecto 
                empresa="Imprenta Encabo SRL"
                skills="React, JavaScript, CSS, HTML"
                proyecto="Biblioteca de Troqueles"
                link="troqueles"
                />
            </div>

            <h1 className='experiencia-titulo'>Proyectos de bootcamps y cursos</h1>
            <div className='experiencia-bootcamps'>
                
            </div>
        </div> 
        </div>
       
    );
}



export default Experiencia;
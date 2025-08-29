
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
                empresa="El Carmelo charcutería"
                skills="React, JavaScript, CSS, HTML"
                proyecto="Página corporativa"
                link="fiambreria"
                imagen="fiambreria"
                />
                <TarjetaProyecto 
                empresa="Hotel The Niu Crusoe Bremen"
                skills="React, JavaScript, CSS, HTML"
                proyecto="Administrador de Tareas"
                link="administrador"
                imagen="hotel"
                />
                <TarjetaProyecto 
                empresa="Imprenta Encabo SRL"
                skills="React, JavaScript, CSS, HTML"
                proyecto="Biblioteca de Troqueles"
                link="troqueles"
                imagen="troqueles"
                />
            </div>

            <h1 className='experiencia-titulo'>Proyectos de cursos y bootcamps</h1>
            <div className='experiencia-empresas'>
                <TarjetaProyecto 
                empresa="Challene Alura Latam"
                skills="JavaScript, CSS, HTML"
                proyecto="Glosario de alemán"
                link="glosario"
                imagen="glosario"
                />
                <TarjetaProyecto 
                empresa="Challene Alura Latam"
                skills="JavaScript, CSS, HTML"
                proyecto="Numero Secreto"
                link="numerosecreto"
                imagen="numerosecreto"
                />
                <TarjetaProyecto 
                empresa="Challene Alura Latam"
                skills="JavaScript, CSS, HTML"
                proyecto="Encriptador de textos"
                link="encriptador"
                imagen="encriptador"
                />
                <TarjetaProyecto 
                empresa="Challene Alura Latam"
                skills="JavaScript, CSS, HTML"
                proyecto="Aluraflix"
                link="aluraflix"
                imagen="aluraflix"
                />
                <TarjetaProyecto 
                empresa="Challene freeCodeCamp"
                skills="JavaScript, CSS, HTML"
                proyecto="Piedra, papel o tijeras"
                link="ppt"
                imagen="PPT"
                />
                <TarjetaProyecto 
                empresa="Challene Alura Latam"
                skills="JavaScript, CSS, HTML"
                proyecto="Organizador de roles"
                link="org"
                imagen="org"
                />
            </div>
        </div> 
        </div>
       
    );
}



export default Experiencia;
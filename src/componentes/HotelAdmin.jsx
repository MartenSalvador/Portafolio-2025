
import Proyectos from './Proyectos';
import '../estilos/Proyectos.css'
import Header from './Header';

function HotelAdmin() {
  return (
    <div>
        <Header />
        <div className="experiencia-container"> 
          <Proyectos 
            titulo="Administrador de tareas"
            empresa="Hotel The Niu Crusoe Bremen"
            texto="Esta app busca resolver la planificación de las tareas del técnico de mantenimiento del hotel que antiguamente se le encomendaban con papelitos y fichas impresas. Administrador de tareas está desarrollado con React-Vite. Permite gestionar tareas, marcar como completadas y eliminar. Tabien cuenta con un apartado que permite generar plantillas de todas las habitaciones, piso por piso para que el empleado pueda ir marcando cada habitacion que haya terminado. La aplicación utiliza Firebase para el almacenamiento."
            deploy="https://administrador-de-tareas-5e0f1.web.app/"
            imagen="miniaturaAdmin"
            repo=""
            />                
          </div>
        
    </div>
  )
}

export default HotelAdmin;
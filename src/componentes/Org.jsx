import Header from "./Header";
import Proyectos from "./Proyectos";


function Org() {
    return (
        <div>
            <Header />
            <div className="experiencia-container">
                <Proyectos
                    titulo="Orgnanizador de roles"
                    empresa="Bootcamp Alura Latam"
                    texto="Proyecto para organizar roles y responsabilidades dentro de un equipo de trabajo. La aplicación permite a los usuarios crear equipos, asignar roles y responsabilidades a cada miembro del equipo, y gestionar las tareas asociadas a cada rol. Está desarrollado con JavaScript, HTML y CSS. La aplicación utiliza LocalStorage para el almacenamiento de datos."
                    deploy="https://org-black-zeta.vercel.app/"
                    imagen="org"
                    repo="org"
                />


            </div>


        </div>
    )
}

export default Org;



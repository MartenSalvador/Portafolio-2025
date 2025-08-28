import Header from "./Header";
import Proyectos from "./Proyectos";


function Aluraflix() {
    return (
        <div>
            <Header />
            <div className="experiencia-container">
                <Proyectos
                    titulo="Aluraflix"
                    empresa="Bootcamp Alura Latam"
                    texto="Proyecto realizado en el bootcamp de Alura Latam, donde se desarrolla una aplicación web para gestionar una lista de películas y series. La aplicación permite a los usuarios agregar nuevas películas o series a la lista, ver detalles de cada una, y eliminar las que ya no desean. Está desarrollado con React y utiliza una API simulada para el almacenamiento de datos."
                    deploy="https://aluraflix-martin.vercel.app/"
                    imagen="aluraflix"
                    repo="aluraflix.martin"
                />

            </div>


        </div>
    )
}

export default Aluraflix;



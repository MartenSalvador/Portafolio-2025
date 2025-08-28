import Header from "./Header";
import Proyectos from "./Proyectos";


function Glosario() {
    return (
        <div>
            <Header />
            <div className="experiencia-container">
                <Proyectos
                    titulo="Glosario de alemán"
                    empresa="Challene Alura Latam"
                    texto="Challenge de Alura Latam, que cuenta con un formulario donde el usuario debe ingresar la palabra en español, la palabra en alemán y una url con la imagen. Al apretar en Enviar los datos se almacenan en el archivo json en el server (con API simulada) y muestra una tarjeta en el display con los datos mencionados. Así la persona que esté aprendiendo el idioma puede ir gestionando su aprendizaje de vocabulario. Además el usuario puede buscar tarjetas previamente subidas con una barra de búsqueda y también puede eliminar en el caso que quisiera."
                    deploy="https://martensalvador.github.io/challengeAlura/"
                    imagen="glosario"
                    repo="challengeAlura"
                />
            </div>


        </div>
    )
}

export default Glosario;
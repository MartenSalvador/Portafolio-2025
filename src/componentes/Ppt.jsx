import Header from "./Header";
import Proyectos from "./Proyectos";


function Ppt() {
    return (
        <div>
            <Header />
            <div className="experiencia-container">
                <Proyectos
                    titulo="Juego de Piedra, papel y tijeras"
                    empresa="freecodecamp"
                    texto="El clásico juego de piedra, papel y tijeras realizado en freeCodeCamp donde ellos nos brindaban la base con html y css, y los estudiantes aplicabamos la lógica con JavaScript para que el juego funcione de manera correcta. El juego permite al usuario seleccionar entre piedra, papel o tijeras, y luego genera una elección aleatoria para la computadora. El resultado del juego se muestra en pantalla, indicando si el usuario ganó, perdió o empató. Además, el juego lleva un registro del puntaje del usuario y de la computadora."
                    deploy="https://martensalvador.github.io/piedra-papel-tijera.github.io/"
                    imagen="PPT"
                    repo="piedra-papel-tijera.github.io"
                />

            </div>


        </div>
    )
}

export default Ppt;


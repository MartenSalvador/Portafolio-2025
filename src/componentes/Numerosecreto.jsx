
import Header from "./Header";
import Proyectos from "./Proyectos";


function Numerosecreto() {
    return (
        <div>
            <Header />
            <div className="experiencia-container">
                <Proyectos
                    titulo="Juego de adivinar el número secreto"
                    empresa="Challenge Alura Latam"
                    texto="Juego de adivinar el número realizado en Alura, aplicando lógica con JavaScript. El usuario debe adivinar un número secreto generado aleatoriamente entre 1 y 10. Tiene un total de 3 intentos para acertar el número. Después de cada intento, el juego proporciona retroalimentación indicando si el número ingresado es demasiado alto, demasiado bajo o correcto. Si el usuario adivina el número dentro de los 10 intentos, gana el juego; de lo contrario, pierde y se revela el número secreto."
                    deploy="https://martensalvador.github.io/juego-adivinar-numero/"
                    imagen="numerosecreto"
                    repo="juego-adivinar-numero"
                />
            </div>


        </div>
    )
}

export default Numerosecreto;











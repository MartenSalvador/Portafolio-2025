
import Header from "./Header";
import Proyectos from "./Proyectos";


function Encriptador() {
    return (
        <div>
            <Header />
            <div className="experiencia-container">
                <Proyectos
                    titulo="Encriptador de textos"
                    empresa="Challene Alura Latam"
                    texto="Challenge de Alura Latam, donde el usuario ingresa un texto y se lo encripta. A su vez si el usuario ingresa un texto encriptado con este programa, se puede desencriptar. El programa cumple con las siguientes reglas de encriptación: 'e' es convertida para 'enter' 'i' es convertida para 'imes' 'a' es convertida para 'ai' 'o' es convertida para 'ober' 'u' es convertida para 'ufat' Adicionalmente el programa cuenta con un botón que permite copiar el texto encriptado o desencriptado al portapapeles."
                    deploy="https://martensalvador.github.io/encriptador-challengeAlura/"
                    imagen="encriptador"
                    repo="encriptador-challengeAlura"
                />
            </div>


        </div>
    )
}

export default Encriptador;







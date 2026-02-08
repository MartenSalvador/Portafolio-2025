
import Header from "./Header";
import Proyectos from "./Proyectos";
import { useTranslation } from "react-i18next";



function Numerosecreto() {
    const { t } = useTranslation();
    return (
        <div>
            <div className="experiencia-container">
                <Proyectos
                    titulo={t("experience.numerosecreto")}
                    empresa="Challenge Alura Latam"
                    texto={t("experience.descriptionNumerosecreto")}
                    deploy="https://martensalvador.github.io/juego-adivinar-numero/"
                    imagen="numerosecreto"
                    repo="juego-adivinar-numero"
                />
            </div>


        </div>
    )
}

export default Numerosecreto;












import Header from "./Header";
import Proyectos from "./Proyectos";
import { useTranslation } from "react-i18next";


function Encriptador() {
    const { t } = useTranslation();
    return (
        <div>
            <Header />
            <div className="experiencia-container">
                <Proyectos
                    titulo={t("experience.encriptador")}
                    empresa="Challene Alura Latam"
                    texto={t("experience.descriptionEncriptador")}
                    deploy="https://martensalvador.github.io/encriptador-challengeAlura/"
                    imagen="encriptador"
                    repo="encriptador-challengeAlura"
                />
            </div>


        </div>
    )
}

export default Encriptador;







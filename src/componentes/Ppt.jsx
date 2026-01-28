import Header from "./Header";
import Proyectos from "./Proyectos";
import { useTranslation } from "react-i18next";


function Ppt() {
    const { t } = useTranslation();
    return (
        <div>
            <Header />
            <div className="experiencia-container">
                <Proyectos
                    titulo={t("experience.ppt")}
                    empresa="freecodecamp"
                    texto={t("experience.descriptionPpt")}
                    deploy="https://martensalvador.github.io/piedra-papel-tijera.github.io/"
                    imagen="PPT"
                    repo="piedra-papel-tijera.github.io"
                />

            </div>


        </div>
    )
}

export default Ppt;


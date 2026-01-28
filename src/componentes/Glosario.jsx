import Header from "./Header";
import Proyectos from "./Proyectos";
import { useTranslation } from "react-i18next";


function Glosario() {
    const { t } = useTranslation();
    return (
        <div>
            <Header />
            <div className="experiencia-container">
                <Proyectos
                    titulo={t("experience.glosario")}
                    empresa="Challene Alura Latam"
                    texto={t("experience.descriptionGlosario")}
                    deploy="https://martensalvador.github.io/challengeAlura/"
                    imagen="glosario"
                    repo="challengeAlura"
                />
            </div>


        </div>
    )
}

export default Glosario;
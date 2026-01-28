
import Header from "./Header";
import Proyectos from "./Proyectos";
import { useTranslation } from "react-i18next";


function Numerosecreto() {
    const { t } = useTranslation();
    return (
        <div>
            <Header />
            <div className="experiencia-container">
                <Proyectos
                    titulo= {t("experience.fiambreria")}
                    empresa="El Carmelo charcutería"
                    texto={t("experience.descriptionFiambreria")}
                    deploy="https://el-carmelo-charcuteria.web.app/"
                    imagen="fiambreria"
                    repo="El-Carmelo-charcuteria"
                />
            </div>


        </div>
    )
}

export default Numerosecreto;
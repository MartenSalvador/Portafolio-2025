import Header from "./Header";
import Proyectos from "./Proyectos";
import { useTranslation } from "react-i18next";


function Org() {
    const { t } = useTranslation();
    return (
        <div>
            <Header />
            <div className="experiencia-container">
                <Proyectos
                    titulo={t("experience.org")}
                    empresa="Bootcamp Alura Latam"
                    texto={t("experience.descriptionOrg")}
                    deploy="https://org-black-zeta.vercel.app/"
                    imagen="org"
                    repo="org"
                />


            </div>


        </div>
    )
}

export default Org;



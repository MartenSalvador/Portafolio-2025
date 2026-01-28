import Header from "./Header";
import Proyectos from "./Proyectos";
import { useTranslation } from "react-i18next";



function Aluraflix() {
    const { t } = useTranslation();
    return (
        <div>
            <Header />
            <div className="experiencia-container">
                <Proyectos
                    titulo="Aluraflix"
                    empresa="Bootcamp Alura Latam"
                    texto={t("experience.descriptionAluraflix")}
                    deploy="https://aluraflix-martin.vercel.app/"
                    imagen="aluraflix"
                    repo="aluraflix.martin"
                />

            </div>


        </div>
    )
}

export default Aluraflix;



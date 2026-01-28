import Header from "./Header";
import Proyectos from "./Proyectos";
import { useTranslation } from "react-i18next";

function Troqueles() {
  const { t } = useTranslation();
  return (
    <div>
      <Header />
      <div className="experiencia-container">
        <Proyectos
          titulo={t("experience.troqueles")}
          empresa="Imprenta Encabo SRL"
          texto={t("experience.descriptionTroqueles")}
          deploy="https://biblioteca-de-troqueles.web.app/"
          imagen="troqueles"
          repo="Biblioteca-de-Troqueles-Encabo"
        />
      </div>


    </div>
  )
}

export default Troqueles;
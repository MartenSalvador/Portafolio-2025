
import Proyectos from './Proyectos';
import '../estilos/Proyectos.css'
import Header from './Header';
import { useTranslation } from "react-i18next";


function HotelAdmin() {
  const { t } = useTranslation();
  return (
    <div>
      <div className="experiencia-container">
        <Proyectos
          titulo={t("experience.administrador")}
          empresa="Hotel The Niu Crusoe Bremen"
          texto={t("experience.descriptionAdministrador")}
          deploy="https://administrador-de-tareas-5e0f1.web.app"
          imagen="hotel"
          repo=""
        />
      </div>

    </div>
  )
}

export default HotelAdmin;
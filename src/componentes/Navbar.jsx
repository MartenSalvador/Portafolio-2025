import { Link } from "react-router-dom";
import "../estilos/Navbar.css"
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";



function Navbar(){
    const { t } = useTranslation();
    return (
        <nav className="nav-container">
            <Link className="link-nav" to="/">{t("nav.home")}</Link>
            <Link className="link-nav" to="/sobremi">{t("nav.about")}</Link>
            <Link className="link-nav" to="/proyectos">{t("nav.projects")}</Link>

            <Link className="link-nav" to="/estudios">{t("nav.studies")}</Link>

            <Link className="link-nav" to="/contacto">{t("nav.contact")}</Link>
            <LanguageSwitcher />

        </nav>
    )
}


export default Navbar;
import { Link } from "react-router-dom";
import "../estilos/Navbar.css"
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { X, Menu } from "lucide-react";

function Navbar() {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="nav-container">
            <div className="nav-content">

                <Link className="gradient-text logo-header" to="/">MS</Link>

                {/* Botón hamburguesa */}
                <button
                    className="menu-toggle"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
                {/* Desktop */}
                <div className="nav-links desktop">
                    <Link className="link-nav" to="/">{t("nav.home")}</Link>
                    <Link className="link-nav" to="/sobremi">{t("nav.about")}</Link>
                    <Link className="link-nav" to="/proyectos">{t("nav.projects")}</Link>
                    <Link className="link-nav" to="/estudios">{t("nav.studies")}</Link>
                    <Link className="link-nav" to="/contacto">{t("nav.contact")}</Link>
                    <LanguageSwitcher />
                </div>
            </div>

            {/* Mobile menu ABAJO */}
            {isOpen && (
                <div className="mobile-menu">
                    <Link className="link-nav" onClick={() => setIsOpen(false)} to="/"> {t("nav.home")} </Link>
                    <Link className="link-nav" onClick={() => setIsOpen(false)} to="/sobremi">{t("nav.about")}</Link>
                    <Link className="link-nav" onClick={() => setIsOpen(false)} to="/proyectos">{t("nav.projects")}</Link>
                    <Link className="link-nav" onClick={() => setIsOpen(false)} to="/estudios">{t("nav.studies")}</Link>
                    <Link className="link-nav" onClick={() => setIsOpen(false)} to="/contacto">{t("nav.contact")}</Link>
                    <LanguageSwitcher />
                </div>
            )}
        </nav>
    );
}

export default Navbar;
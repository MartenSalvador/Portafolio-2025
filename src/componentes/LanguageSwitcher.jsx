import { useTranslation } from "react-i18next";
import '../estilos/LanguageSwitcher.css';
function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLang = () => {
    const nextLang = i18n.language === "es" ? "en" : "es";
    i18n.changeLanguage(nextLang);
    localStorage.setItem("lang", nextLang);
  };

  return (
    <button
      onClick={changeLang}
      aria-label="Change language"
      className="language-switcher"
    >
      {i18n.language === "es" ? "🇬🇧" : "🇪🇸"}
    </button>
  );
}

export default LanguageSwitcher;

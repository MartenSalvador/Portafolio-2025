import { useTranslation } from "react-i18next";

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
      style={{
        border: "none",
        cursor: "pointer",
        fontSize: "1.4rem",
        
        fontFamily: "system-ui, apple color emoji, Segoe UI Emoji, Noto Color Emoji"
      }}
    >
      {i18n.language === "es" ? "🇬🇧" : "🇪🇸"}
    </button>
  );
}

export default LanguageSwitcher;

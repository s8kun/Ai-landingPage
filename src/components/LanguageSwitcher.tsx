import { useTranslation } from "react-i18next";

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ar" : "en");
  };

  return (
    <button
      onClick={toggleLanguage}
      className="outline-none px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 cursor-pointer hover:scale-105 transition duration-300"
    >
      {i18n.language === "en" ? "عربي" : "English"}
    </button>
  );
};

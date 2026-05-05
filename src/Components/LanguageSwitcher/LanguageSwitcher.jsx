import React, { useState } from "react";
import { getLocalStorage, setLocalStorage } from "../../services/localStorage";
import { useTranslation } from "react-i18next";

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(getLocalStorage("language") || "es");

  
  const languageHandler = (e) => {
    setLanguage(e.target.value)
    setLocalStorage("language", e.target.value);
    i18n.changeLanguage(e.target.value);
  };
  return (
    <select
  name="language"
  onChange={languageHandler}
  value={language}
  className="px-3 py-2 bg-transparent border-b border-gray-300 text-gray-700 focus:outline-none focus:border-blue-500"
>
  <option value="es">Español</option>
  <option value="en">Inglés</option>
  <option value="pg">Guaraní</option>
</select>

  );
};

import { NavLink } from "react-router";
import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const { t } = useTranslation();

  return (
    <header className=" sticky top-0 z-50 bg-linear-to-r from-pink-200 via-purple-200 to-blue-200 shadow-[0_0_20px_rgba(0,0,0,0.15)] border-b-4 border-dashed border-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-2xl font-bold text-purple-700 flex items-center drop-shadow">
          <NavLink to="/">
            <img className="w-20" src="logo.png" alt="Logo de IUPI" />
          </NavLink>
        </div>

        {/* Navegación */}
        <nav className="flex gap-6 font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-purple-700 font-bold border-b-2 border-purple-400 transition text-3xl"
                : "text-gray-700 hover:text-pink-500 transition text-3xl"
            }
          >
            {t("header.inicio")}
          </NavLink>

          <NavLink
            to="/detalles"
            className={({ isActive }) =>
              isActive
                ? "text-purple-700 font-bold border-b-2 border-purple-400 transition text-3xl"
                : "text-gray-700 hover:text-pink-500 transition text-3xl"
            }
          >
            {t("header.detalles")}
          </NavLink>
        </nav>

        {/* Selector de idioma */}
        <div className="ml-4">
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
};

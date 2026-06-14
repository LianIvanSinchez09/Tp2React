import React from "react";
import { useTranslation } from "react-i18next";
import { Header } from "../../Components/Header/Header";
import { Footer } from "../../Components/Footer/Footer";

const Login = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen bg-pink-50">
      <Header />

      <main className="flex flex-1 items-center justify-center mt-20">
        <div className="bg-white shadow-md rounded-2xl p-8 w-full max-w-md border border-pink-100">
          <h2 className="text-2xl font-bold text-pink-400 mb-6 text-center">
            {t("login.title", "Iniciar sesión")}
          </h2>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-pink-400 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="tuemail@ejemplo.com"
                className="w-full px-4 py-2 border border-pink-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-pink-400 border- mb-1">
                Contraseña
              </label>
              <input
                type="password"
                placeholder="********"
                className="w-full px-4 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 
              shadow-[0_0_15px_rgba(0,0,0,0.1)] text-gray-700 py-2 rounded-lg 
              hover:from-pink-200 hover:via-purple-200 hover:to-blue-200 
              transition-colors font-semibold cursor-pointer"
            >
              {t("login.submit", "Entrar")}
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Login;

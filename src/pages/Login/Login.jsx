import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Header } from "../../Components/Header/Header";
import { Footer } from "../../Components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import { getLocalStorage, setLocalStorage } from "../../services/localStorage";
import { verificarLogin } from "../../services/api";

const Login = () => {
  const [mensaje, setMensaje] = useState("");
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [logeado, setLogeado] = useState(getLocalStorage("logeado") || -1);

  const handleLogout = () => {
    setLocalStorage("logeado", -1);
    setLogeado(-1);
    navigate("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let email = e.target.email.value;
    let password = e.target.password.value;

    try {
      const resultado = await verificarLogin(email, password);
      if (resultado !== -1) {
        setMensaje(t("login.success", "Correcto"));
        setLocalStorage("logeado", resultado);
        navigate("/");
      } else {
        setMensaje(t("login.error", "Datos incorrectos"));
      }
    } catch (error) {
      setMensaje(t("login.error", "Datos incorrectos"));
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-pink-50">
      <Header />
      <main className="flex flex-1 items-center justify-center mt-20">
        <div className="bg-white shadow-md rounded-2xl p-8 w-full max-w-md border border-pink-100">
          {logeado === -1 ? (
            <>
              <h2 className="text-2xl font-bold text-pink-400 mb-6 text-center">
                {t("login.title")}
              </h2>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-pink-400 mb-1">
                    {t("login.email")}
                  </label>
                  <input
                    type="email"
                    placeholder="tuemail@ejemplo.com"
                    name="email"
                    className="w-full px-4 py-2 border border-pink-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-pink-400 mb-1">
                    {t("login.password")}
                  </label>
                  <input
                    type="password"
                    placeholder="********"
                    name="password"
                    className="w-full px-4 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
                  />
                </div>

                {mensaje && <p className="mt-2 text-sm">{mensaje}</p>}

                <p className="text-center text-sm text-gray-500">
                  {t("login.noAccount")}{" "}
                  <a href="/register" className="text-pink-400 font-semibold hover:underline">
                    {t("login.register")}
                  </a>
                </p>

                <button
                  type="submit"
                  className="w-full bg-linear-to-r from-pink-100 via-purple-100 to-blue-100 
                    shadow-[0_0_15px_rgba(0,0,0,0.1)] text-gray-700 py-2 rounded-lg 
                    hover:from-pink-200 hover:via-purple-200 hover:to-blue-200 
                    transition-colors font-semibold cursor-pointer"
                >
                  {t("login.submit")}
                </button>
              </form>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-pink-400 mb-6 text-center">
                {t("logout.title")}
              </h2>
              <p className="text-gray-600 mb-4 text-center">
                {t("logout.message")}
              </p>
              <button
                onClick={handleLogout}
                className="w-full bg-linear-to-r from-red-100 via-pink-100 to-orange-100 
                  shadow-[0_0_15px_rgba(0,0,0,0.1)] text-gray-700 py-2 rounded-lg 
                  hover:from-red-200 hover:via-pink-200 hover:to-orange-200 
                  transition-colors font-semibold cursor-pointer"
              >
                {t("logout.submit")}
              </button>
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
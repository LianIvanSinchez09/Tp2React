import React from "react";
import { Footer } from "../../Components/Footer/Footer";
import { useNavigate } from "react-router";
import { Header } from "../../Components/Header/Header";
import { useTranslation } from "react-i18next";

const Detalles = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col min-h-screen">
      <Header navigation={navigation}></Header>
      <main className="grow">
        <h1 className="text-center text-white text-5xl font-bold animate-bounce">{t("Detalles.title")}</h1>

        <div className="container py-5 min-h-[72vh]">
          <div
            className="p-5 rounded-xl  flex flex-col gap-5 relative 
                   from-pink-200 to-blue-200  border-white "
          >
            <h1 className="text-center text-white text-5xl font-bold animate-bounce">
              {t("Detalles.title2")}
            </h1>

            {/* Sección 1 */}
            <div className="bg-white rounded-xl p-4 shadow-sm border-l-4 border-yellow-400 ">
              <h2 className="text-center text-black font-bold mb-3 text-2xl">
                {t("Detalles.question")}
              </h2>
              <p className="text-gray-800 text-lg leading-relaxed">
                {t("Detalles.answer")}
              </p>
            </div>

            {/* Sección 2 */}
            <div className="bg-white rounded-xl p-4 shadow-sm border-l-4 border-green-500">
              <h2 className="text-center text-green-600 font-bold mb-3 text-2xl">
                {t("Detalles.question2")}
              </h2>
              <p className="text-gray-800 text-lg leading-relaxed">
                {t("Detalles.answer2")}
              </p>
            </div>

            {/* Sección 3 */}
            <div className="bg-white rounded-xl p-4 shadow-sm border-l-4 border-red-500">
              <h2 className="text-center text-red-600 font-bold mb-3 text-2xl">
                {t("Detalles.question3")}
              </h2>
              <p className="text-gray-800 text-lg leading-relaxed">
                {t("Detalles.answer3")}
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Detalles;

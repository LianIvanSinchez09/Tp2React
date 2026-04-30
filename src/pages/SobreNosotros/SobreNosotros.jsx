import React from 'react'
import { useTranslation } from 'react-i18next';
import { Header } from '../../Components/Header/Header';
import { Footer } from '../../Components/Footer/Footer';


const SobreNosotros = () => {
    const { t } = useTranslation();
        
    return (
    <div className="flex flex-col min-h-screen">
      <Header navigation={navigation}/>
      <main className="grow">
        <h1 className="text-center text-white text-5xl font-bold animate-bounce">{t("SobreNosotros.title")}</h1>

        <div className="container py-5 min-h-[72vh]">
          <div
            className="p-5 rounded-xl  flex flex-col gap-5 relative 
                   from-pink-200 to-blue-200  border-white "
          >
            <h1 className="text-center text-white text-5xl font-bold animate-bounce">
              {t("SobreNosotros.title2")}
            </h1>

            {/* Sección 1 */}
            <div className="bg-white rounded-xl p-4 shadow-sm border-l-4 border-yellow-400 ">
              <h2 className="text-center text-black font-bold mb-3 text-2xl">
                {t("SobreNosotros.question")}
              </h2>
              <p className="text-gray-800 text-lg leading-relaxed">
                {t("SobreNosotros.answer")}
              </p>
            </div>

            {/* Sección 2 */}
            <div className="bg-white rounded-xl p-4 shadow-sm border-l-4 border-green-500">
              <h2 className="text-center text-green-600 font-bold mb-3 text-2xl">
                {t("SobreNosotros.question2")}
              </h2>
              <p className="text-gray-800 text-lg leading-relaxed">
                {t("SobreNosotros.answer2")}
              </p>
            </div>

            {/* Sección 3 */}
            <div className="bg-white rounded-xl p-4 shadow-sm border-l-4 border-red-500">
              <h2 className="text-center text-red-600 font-bold mb-3 text-2xl">
                {t("SobreNosotros.question3")}
              </h2>
              <p className="text-gray-800 text-lg leading-relaxed">
                {t("SobreNosotros.answer3")}
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
    )
}

export default SobreNosotros

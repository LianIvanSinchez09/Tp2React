import { useTranslation } from "react-i18next";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

export default function NotFound() {
  const { t } = useTranslation();
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center h-screen">
        <img src="./icons/404.svg" alt="Imagen de error 404" className="h-100" />
        <h1 className="text-4xl font-bold text-red-500">404</h1>
        <p className="text-lg text-gray-600">{t("404.title")}</p>

        <Footer className="pt-10"/>
      </div>
    </>
  );
}

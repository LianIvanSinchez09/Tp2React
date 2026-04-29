import React from 'react'
import { Footer } from '../../Components/Footer/Footer'
import { useTranslation } from "react-i18next"

const Home = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col min-h-screen">
      <main className="grow">
        <h1>{t("home.title")}</h1>
      </main>
      <Footer />
    </div>
  )
}

export default Home

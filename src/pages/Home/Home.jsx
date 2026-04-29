import React from 'react'
import { Footer } from '../../Components/Footer/Footer'
import ItemLoader from '../../Components/ItemLoader/ItemLoader'
import {useTranslation} from "react-i18next";
import { getLocalStorage, setLocalStorage } from '../../services/localStorage';
import { Header } from '../../Components/Header/Header';

const Home = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col min-h-screen">
      <Header></Header>
      <main className="grow">
        <h1 className="text-center text-white text-5xl font-bold animate-bounce">{t("home.title")}</h1>
      </main>
      <ItemLoader/>  
      <Footer />
    </div>
  
  )
}

export default Home

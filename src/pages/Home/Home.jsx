<<<<<<< HEAD
import React, { useState, useRef } from 'react';
import { Footer } from '../../Components/Footer/Footer'
import ItemLoader from '../../Components/ItemLoader/ItemLoader'
import SearchBar from '../../Components/SearchBar/SearchBar';
import {useTranslation} from "react-i18next";
import { getLocalStorage, setLocalStorage } from '../../services/localStorage';
import { Header } from '../../Components/Header/Header';
import Spinner from '../../Components/Spinner/Spinner';
import './Home.css'
import HeroSection from '../../Components/Hero/HeroSection';
=======
import React, { useState } from "react";
import { Footer } from "../../Components/Footer/Footer";
import ItemLoader from "../../Components/ItemLoader/ItemLoader";
import SearchBar from "../../Components/SearchBar/SearchBar";
import { useTranslation } from "react-i18next";
import { getLocalStorage, setLocalStorage } from "../../services/localStorage";
import { Header } from "../../Components/Header/Header";
>>>>>>> 4096d7331ef04323b3ff4388b677df47d7682165


const Home = ({ handleScroll }) => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
<<<<<<< HEAD

  return (
    <>
      <Header/>
      <div className="overflow-hidden flex flex-col min-h-screen ">
        <HeroSection handleScroll={handleScroll}/>
        <main className="grow">
          <h1 className="text-center text-white text-5xl font-bold">{t("home.title")}</h1>
            <SearchBar 
            searchQuery={searchQuery} 
            setSearchQuery={setSearchQuery}/>
          <ItemLoader searchQuery={searchQuery}/> 
        </main>
        
        <Footer />
      </div>
    </>
  )
}
=======
  const [favorites, setFavorites] = useState([]);
  if (!getLocalStorage("favorites")) {
    setLocalStorage("favorites", []);
  }
  return (
    <div className="flex flex-col min-h-screen">
      <Header></Header>
      <main className="grow">
        <h1 className="text-center text-white text-5xl font-bold animate-bounce">
          {t("home.title")}
        </h1>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <ItemLoader searchQuery={searchQuery} setFavorites={setFavorites} />
      </main>

      <Footer />
    </div>
  );
};
>>>>>>> 4096d7331ef04323b3ff4388b677df47d7682165

export default Home;

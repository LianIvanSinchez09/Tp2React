import React, { useState } from 'react';
import { Footer } from '../../Components/Footer/Footer'
import ItemLoader from '../../Components/ItemLoader/ItemLoader'
import SearchBar from '../../Components/SearchBar/SearchBar';
import {useTranslation} from "react-i18next";
import { getLocalStorage, setLocalStorage } from '../../services/localStorage';
import { Header } from '../../Components/Header/Header';

const Home = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
    const [favorites, setFavorites] = useState([]);
  if (!getLocalStorage("favorites")) {
  setLocalStorage("favorites", []);
}
  return (
    <div className="flex flex-col min-h-screen">
      <Header></Header>
      <main className="grow">
        <h1 className="text-center text-white text-5xl font-bold animate-bounce">{t("home.title")}</h1>
        <SearchBar 
          searchQuery={searchQuery} 
          setSearchQuery={setSearchQuery} 
        />
        <ItemLoader searchQuery={searchQuery} setFavorites={setFavorites}/> 
        
      </main>
      
      <Footer />
    </div>
  
  )
}

export default Home

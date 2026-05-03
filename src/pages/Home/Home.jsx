import React, { useState } from 'react';
import { Footer } from '../../Components/Footer/Footer'
import ItemLoader from '../../Components/ItemLoader/ItemLoader'
import SearchBar from '../../Components/SearchBar/SearchBar';
import {useTranslation} from "react-i18next";
import { getLocalStorage, setLocalStorage } from '../../services/localStorage';
import { Header } from '../../Components/Header/Header';
import Hero from '../../Components/Hero/Hero';
import Spinner from '../../Components/Spinner/Spinner';
import './Home.css'


const Home = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <>
    <body>
    <Header/>
    <div className="flex flex-col min-h-screen ">
      <Hero/>
      <main className="grow">
        <h1 className="text-center text-white text-5xl font-bold">{t("home.title")}</h1>
        <SearchBar 
          searchQuery={searchQuery} 
          setSearchQuery={setSearchQuery} 
        />
        <ItemLoader searchQuery={searchQuery} /> 
        
      </main>
      
      <Footer />
    </div>
    </body>
    
    </>
  
  )
}

export default Home

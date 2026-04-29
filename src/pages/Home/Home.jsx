import React, { useState } from 'react';
import { Footer } from '../../Components/Footer/Footer'
import ItemLoader from '../../Components/ItemLoader/ItemLoader'
import SearchBar from '../../Components/SearchBar/SearchBar';
import {useTranslation} from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className="flex flex-col min-h-screen">
      <main className="grow">
        <h1>{t("home.title")}</h1>
        <SearchBar 
          searchQuery={searchQuery} 
          setSearchQuery={setSearchQuery} 
        />
        <ItemLoader searchQuery={searchQuery} /> 
      </main>
      
      <Footer />
    </div>
  
  )
}

export default Home

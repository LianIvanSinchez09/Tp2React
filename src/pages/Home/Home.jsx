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


const Home = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");

  const targetRef = useRef(null);

  const handleScroll = () => {
    // Check if the ref is attached before calling the method
    targetRef.current?.scrollIntoView({
      behavior: 'auto', // 'auto' (default) or 'smooth'
      block: 'center',     // 'start', 'center', 'end', or 'nearest'
      inline: 'nearest'   // 'start', 'center', 'end', or 'nearest'
    });
  };

  return (
    <>
      <Header/>
      <div className="overflow-hidden flex flex-col min-h-screen ">
        <HeroSection handleScroll={handleScroll}/>
        <main className="grow">
          <h1 className="text-center text-white text-5xl font-bold">{t("home.title")}</h1>
          <div ref={targetRef}>
            <SearchBar 
            searchQuery={searchQuery} 
            setSearchQuery={setSearchQuery} 
          />
          </div>
          <ItemLoader searchQuery={searchQuery}/> 
        </main>
        
        <Footer />
      </div>
    </>
  )
}

export default Home

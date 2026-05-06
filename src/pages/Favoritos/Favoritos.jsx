import React, { useState, useEffect } from "react";
import { Footer } from "../../Components/Footer/Footer";
import ItemLoader from "../../Components/ItemLoader/ItemLoader";
import SearchBar from "../../Components/SearchBar/SearchBar";
import { useTranslation } from "react-i18next";
import { getLocalStorage, setLocalStorage } from "../../services/localStorage";
import { Header } from "../../Components/Header/Header";

const Favorites = () => {
  const { t } = useTranslation();
  const [favorites, setFavorites] = useState([]);

  // inicializar favoritos desde localStorage
  useEffect(() => {
    setFavorites(getLocalStorage("favorites"));
  }, []);

  return (

    <div className="flex flex-col min-h-screen">
      <Header/>
      <main className="grow mt-40">
      <div 
      className="relative z-10 flex justify-center items-center "
      >
        <div
          className="fade-up fade-up-d2 font-serif font-black leading-[1.08] mb-5"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(20px, 6.5vw, 78px)",
            color: "#2d1a5c",
          }}
          >
          {t("Favorites.titulo")}
        </div>
        </div>
        {favorites.length > 0 ? (
          //pasamos el useState completo para que se vaya modificando a medida que se vaya usando
          <ItemLoader favorites={favorites} setFavorites={setFavorites}/>
        ) : (
          <p className="text-center text-black m-10 text-2xl mt-10">
            {t("Favorites.noFavoritesMessage")}
          </p>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Favorites;

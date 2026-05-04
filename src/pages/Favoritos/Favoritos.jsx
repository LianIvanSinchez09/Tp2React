import React, { useState, useEffect } from "react";
import { Footer } from "../../Components/Footer/Footer";
import ItemLoader from "../../Components/ItemLoader/ItemLoader";
import SearchBar from "../../Components/SearchBar/SearchBar";
import { useTranslation } from "react-i18next";
import { getLocalStorage, setLocalStorage } from "../../services/localStorage";
import { Header } from "../../Components/Header/Header";

const Favorites = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [favorites, setFavorites] = useState([]);

  // inicializar favoritos desde localStorage
  useEffect(() => {
    setFavorites(getLocalStorage("favorites"));
  }, []);
  return (
    <div className="flex flex-col min-h-screen">
      <Header></Header>
      <main className="grow">
        <h1 className="text-center text-white text-5xl font-bold animate-bounce">
          {t("header.favoritos")}
        </h1>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        {favorites.length > 0 ? (
          //pasamos el useState completo para que se vaya modificando a medida que se vaya usando
          <ItemLoader favorites={favorites} setFavorites={setFavorites} searchQuery={searchQuery} />
        ) : (
          <p className="text-center text-white m-10 text-2xl">
            {t("noFavoritesMessage", "Todavía no tienes favoritos")}
          </p>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Favorites;

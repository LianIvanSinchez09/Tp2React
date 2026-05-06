import React, { useState, useEffect } from "react";
import { Footer } from "../../Components/Footer/Footer";
import ItemLoader from "../../Components/ItemLoader/ItemLoader";
import SearchBar from "../../Components/SearchBar/SearchBar";
import { useTranslation } from "react-i18next";
import { getLocalStorage, setLocalStorage } from "../../services/localStorage";
import { Header } from "../../Components/Header/Header";
import { getProducts, setLocalStorage } from '../../services/localStorage';

const Favorites = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [favoritesSearch, setfavoritesSearch] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const cantProductos = 6;
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const [results, setResults] = useState([]);

  // inicializar favoritos desde localStorage
  useEffect(() => {
    setFavorites(getLocalStorage("favorites"));
  }, []);

  useEffect(() => {
    if(searchQuery.length > 0){
      setLoading(true);
      setError(null);
      const favoritesFilter = favorites.filter((item)=>{
        return item.name?.toLowerCase().includes(searchQuery.toLowerCase());
      })
      setfavoritesSearch(favoritesFilter)
      setLoading(false);
    }else{
      setfavoritesSearch(favorites)
    }
  }, [searchQuery, page, favorites]);
  
  console.log(favoritesSearch);
  

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
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        {favoritesSearch?.length > 0 ? (
          //pasamos el useState completo para que se vaya modificando a medida que se vaya usando
          <ItemLoader favorites={favoritesSearch} setFavorites={setFavorites} searchQuery={searchQuery} />
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
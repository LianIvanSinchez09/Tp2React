import { useState } from "react";
import { getLocalStorage, setLocalStorage } from "../../services/localStorage";

export const Favorite = ({ item }) => {
    const [isFavorite, setIsFavorite] = useState(() => {
        const arrayLocal = getLocalStorage("favorites") || [];
        return arrayLocal.some((fav) => fav.id === item.id);
    });
    const handleFavorite = () => {
      const arrayLocal = getLocalStorage("favorites");
    if (arrayLocal) {
      if (isFavorite) {
        const newArray = arrayLocal.filter((fav) => fav.id !== item.id);
        setLocalStorage("favorites", newArray);
        setIsFavorite(false);
      } else {
        arrayLocal.push(item);
        setLocalStorage("favorites", arrayLocal);
        setIsFavorite(true);
      }
    }
  };

  return (
    <div onClick={handleFavorite}>
      {isFavorite ? (
        <img className="w-7" src="icons/favorite2.svg" alt="Favorito" />
      ) : (
        <img className="w-7" src="icons/favorite.svg" alt="No favorito" />
      )}
    </div>
  );
};

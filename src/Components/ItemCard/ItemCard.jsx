import React, { useEffect, useState } from "react";
import "./ItemCard.css";
import { Link } from "react-router-dom";
import { Favorite } from "../Favorite/Favorite";
import { getLocalStorage, setLocalStorage } from "../../services/localStorage";

import { deleteFavorite, getFavoriteId, setFavorite } from "../../services/api";
export const ItemCard = ({
  name,
  avatar,
  description,
  price,
  stock,
  id,
  setFavorites,
}) => {
  const props = {
    name: name,
    avatar: avatar,
    description: description,
    price: price,
    stock: stock,
    id: id,
  };
  //Seccion para favoritos
  const [isFavorite, setIsFavorite] = useState(-1); // valor inicial

  useEffect(() => {
    const fetchFavorite = async () => {
      const userId = getLocalStorage("logeado");
      const resultado = await getFavoriteId(userId, id);
      setIsFavorite(resultado); // actualiza el estado con el id
    };

    fetchFavorite();
  }, [id]);

  const handleFavorite = () => {
    console.log(isFavorite);
    if (isFavorite < 0) {
      setFavorite(getLocalStorage("logeado"), id);
      setIsFavorite(id);
    } else {
      deleteFavorite(getLocalStorage("logeado"), id);
      setIsFavorite(-1);
    }
  };

  return (
    <div className="relative w-72 bg-white shadow-md rounded-xl duration-500 hover:shadow-2xl">
      <Link to={`/detalles/${props.id}`}>
        <div>
          <img
            src={props.avatar}
            alt="Product"
            className="h-80 w-72 object-cover rounded-t-xl"
          />
          <div className="px-4 py-3 w-72">
            <p className="text-lg font-bold text-black truncate block capitalize">
              {props.name}
            </p>
            <div className="flex items-center">
              <p className="text-lg font-semibold text-black cursor-auto my-3">
                ${props.price}
              </p>
            </div>
          </div>
        </div>
      </Link>
      <div className="absolute bottom-2 right-2">
        <Favorite
          handleFavorite={handleFavorite}
          isFavorite={isFavorite}
        ></Favorite>
      </div>
    </div>
  );
};

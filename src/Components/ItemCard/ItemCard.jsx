import React, { useEffect, useState } from "react";
import "./ItemCard.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
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
  isAlreadyFavorite,
  idUser,
}) => {
  const props = { name, avatar, description, price, stock, id };

  const [isFavorite, setIsFavorite] = useState(isAlreadyFavorite ? id : -1);

  const navigate = useNavigate();
  useEffect(() => {
    if (!isAlreadyFavorite && idUser !== null) {
      const fetchFavorite = async () => {
        const userId = idUser;
        if (userId !== -1) {
          const resultado = await getFavoriteId(userId, id);
          setIsFavorite(resultado);
        }
      };

      fetchFavorite();
    }
  }, [id, isAlreadyFavorite, idUser]);

  const handleFavorite = () => {
    if (idUser === -1) {
      navigate("/login");
    } else {
      if (isFavorite < 0) {
        setFavorite(idUser, id);
        setIsFavorite(id);
      } else {
        deleteFavorite(idUser, id);
        setIsFavorite(-1);
        if (typeof setFavorites === "function") {
          setFavorites((prev) => prev.filter((item) => item.id !== id));
        }
      }
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
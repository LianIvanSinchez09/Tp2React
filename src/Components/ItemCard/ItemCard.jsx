import React from "react";
import "./ItemCard.css";
import { Link } from "react-router";
import { Favorite } from "../Favorite/Favorite";


const ItemCard = ({ ...props }) => {
  return (
    <div className="relative w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"> 
    <Link to={`/detalles/${props.id}`}>
      <div >
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
              <Favorite item={props}></Favorite>
            </div>
    </div>
  );
};

export default ItemCard;

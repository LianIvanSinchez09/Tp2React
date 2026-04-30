import React, { useState, useEffect } from "react";
import { Footer } from "../../Components/Footer/Footer";
import { useParams } from "react-router";
import { getProducts } from "../../services/api";
import DetallesCard from "../../Components/DetallesCard/DetallesCard";
import { useNavigate } from "react-router";
import { Header } from "../../Components/Header/Header";
import { useTranslation } from "react-i18next";

export const Detalles = () => {
  const { id } = useParams();

  const [itemInfo, setItemInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts(id)
      .then((data) => {
        setItemInfo(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener el producto:", error);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="flex flex-col min-h-screen m-6">
      <main className="grow">
        {loading ? (
          <h1>Cargando...</h1>
        ) : (
          <DetallesCard item={itemInfo} />
        )}
      </main>
    </div>
  )
}
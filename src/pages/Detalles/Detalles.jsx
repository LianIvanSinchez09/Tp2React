import React, { useState, useEffect } from "react";
import { Footer } from "../../Components/Footer/Footer";
import { useParams } from "react-router";
import { getDetails } from "../../services/api";
import DetallesCard from "../../Components/DetallesCard/DetallesCard";
import { Header } from "../../Components/Header/Header";
import { useTranslation } from "react-i18next";
import Spinner from "../../Components/Spinner/Spinner";
import NotFound from "../NotFound/NotFound";

export const Detalles = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const [itemInfo, setItemInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDetails(id)
      .then((data) => {
        setItemInfo(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener el producto:", error);
        setLoading(false);
      });
  }, [id]);

  if (!loading && !itemInfo) {
    return <NotFound />;
  }

  return (
    <>
      <Header />
      <div className="flex flex-col min-h-screen">
        <main className="grow flex m-20 justify-center">
          {loading ? (
            <Spinner />
          ) : (
            <DetallesCard item={itemInfo} />
          )}
        </main>
        <Footer />
      </div>
    </>
  );
};
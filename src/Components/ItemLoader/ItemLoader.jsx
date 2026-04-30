import React, { useEffect, useState } from 'react';
import { getProducts } from '../../services/api.js';
import ItemCard from '../ItemCard/ItemCard.jsx';

const ItemLoader = ({ searchQuery }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const cantProductos=6;

  // effect de resetear la paginación cuando el usuario hace una nueva búsqueda
  useEffect(() => {
    setPage(1);
    setProducts([]);
    setHasMore(true);
  }, [searchQuery]);

  // effect de buscar productos cuando cambia la query o la página
  useEffect(() => {
    setLoading(true);
    setError(null);

    getProducts(searchQuery, page, cantProductos)
      .then(data => {
        if (Array.isArray(data)) {
          // Si es la primera página, reemplazamos. Si no acumulamos al array existente.
          if (page === 1) {
            setProducts(data);
          } else {
            setProducts(prevProducts => [...prevProducts, ...data]);
          }

          // Si MockAPI nos devuelve menos de cant productos, llegamos al final
          if (data.length < cantProductos) {
            setHasMore(false);
          }
        } else {
          if (page === 1) setProducts([]);
          setHasMore(false);
        }
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [searchQuery, page]);

  // Función para avanzar a la siguiente página
  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  // Solo mostramos el "Cargando" global en la primera página
  if (loading && page === 1) {
    return <p className="text-center my-4">Cargando...</p>
  }
  if (error) {
    return <p className="text-center text-red-500 my-4">Error: {error}</p>
  }

  return (
    <div className="flex flex-col items-center w-full">
      <div className='grid place-items-center grid-cols-1 md:grid-cols-3 gap-4 m-4 w-full'>
        {products.length > 0
          ? products.map((item) => (
            <div key={item.id}>
              <ItemCard {...item} />
            </div>
          ))
          : !loading && ( // esto es para mostrar "no encontrados" mientras carga
            <p className="col-span-3 text-center text-gray-500 mt-8">
              No se encontraron productos para "{searchQuery}"
            </p>
          )
        }
      </div>

      {/* Se crea el boton de cargar mas productos si es que los hay*/}
      {hasMore && products.length > 0 && (
        <button
          onClick={handleLoadMore}
          disabled={loading}
          className="my-8 px-6 py-3 bg-purple-500 text-white rounded-full font-bold shadow-md hover:bg-purple-600 transition-all hover:-translate-y-1 disabled:bg-purple-300 disabled:transform-none disabled:cursor-not-allowed"
        >
          {loading ? "Cargando más..." : "Cargar más"}
        </button>
      )}
    </div>
  );
}

export default ItemLoader;
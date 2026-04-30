import React, { useEffect, useState } from 'react';
import { getProducts } from '../../services/api.js';
import ItemCard from '../ItemCard/ItemCard.jsx';

const ItemLoader = ({ searchQuery }) => {
  const [products, setProducts] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  console.log(products);
  

  useEffect(() => {
    setLoading(true); 
    setError(null);
    
    //Le pasamos el searchQuery a nuestra función de la API
    getProducts(searchQuery)
      .then(data => {
        // Devuelve array vacío si no encuentra nada
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          setProducts([]); 
        }
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [searchQuery]); 

  if (loading){
     return <p className="text-center my-4">Cargando...</p>
  };
  if (error){   
    return <p className="text-center text-red-500 my-4">Error: {error}</p>
  };

  return (
    <div className='grid place-items-center grid-cols-1 md:grid-cols-3 gap-4 m-4'>
      {products.length > 0
        ? products.map((item) => (
            <div key={item.id}>
              <ItemCard {...item}/>
            </div>
          ))
        : <p className="col-span-3 text-center text-gray-500 mt-8">
            No se encontraron productos para "{searchQuery}"
          </p>
      }
    </div>
  );
}

export default ItemLoader;
import React, { useEffect, useState } from 'react';
import { getProducts } from '../../services/api.js';
import ItemCard from '../ItemCard/ItemCard.jsx';

const ItemLoader = () => {
  const [products, setProducts] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  console.log(products);
  

  useEffect(() => {
    getProducts()
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading){
     return <p>Cargando...</p>
  };
  if (error){   
    return <p>Error: {error}</p>
  };

  return (
    <div className='grid place-items-center grid-cols-3 m-4'>
      {products.length > 0
        ? products.map((item) => (
            <div key={item.id}>
              <ItemCard {...item}/>
            </div>
          ))
        : "No hay productos"
      }
    </div>
  );
}

export default ItemLoader;
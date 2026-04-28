import React, { useEffect, useState } from 'react';
import { getProducts } from '../services/api';

const Home = () => {
  // const [products, setProducts] = useState([]); 
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   getProducts()
  //     .then(data => {
  //       setProducts(data);
  //       setLoading(false);
  //     })
  //     .catch(err => {
  //       setError(err.message);
  //       setLoading(false);
  //     });
  // }, []);

  // if (loading){
  //    return <p>Cargando...</p>
  // };
  // if (error){   
  //   return <p>Error: {error}</p>
  // };

  // return (
  //   <div>
  //     {products.length > 0
  //       ? products.map((item) => (
  //           <div key={item.id}>
  //             {item?.name}
  //           </div>
  //         ))
  //       : "No hay productos"
  //     }
  //   </div>
  // );
}

export default Home;
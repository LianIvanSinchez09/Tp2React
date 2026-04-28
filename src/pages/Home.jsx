import React, { useEffect, useState } from 'react';
import { getProducts } from '../services/api';
import ItemCard from '../Components/ItemCard/ItemCard.jsx';
import ItemLoader from '../Components/ItemLoader/ItemLoader.jsx';

const Home = () => {
  return (
    <>
      <p>Home</p>
      <ItemLoader/>
    </>
  )
}

export default Home;
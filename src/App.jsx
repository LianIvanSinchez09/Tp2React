import { useState, useRef } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home/Home'
import './App.css'
import Detalles from './pages/Detalles/Detalles.jsx'

const targetRef = useRef(null);

  const handleScroll = () => {
    // Check if the ref is attached before calling the method
    targetRef.current?.scrollIntoView({
      behavior: 'smooth', // 'auto' (default) or 'smooth'
      block: 'center',     // 'start', 'center', 'end', or 'nearest'
      inline: 'nearest'   // 'start', 'center', 'end', or 'nearest'
    });
  };

function App() {
  return (
      <Home handleScroll={handleScroll}/>
  )
}

export default App
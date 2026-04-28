import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Detalles from './pages/Detalles'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/detalles' element={<Detalles/>}/>
    </Routes>
  )
}

export default App

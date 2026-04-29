import React from 'react'
import { Footer } from '../../Components/Footer/Footer'
import ItemLoader from '../../Components/ItemLoader/ItemLoader'
import '../../App.css'

const Home = () => {
  return (
  <>
    <div className="min-h-screen">
      <main>
         Home
      </main>
      <ItemLoader/>  
      <Footer />
    </div>
  
  </>
  )
}

export default Home

import React from 'react'
import { Footer } from '../../Components/Footer/Footer'
import ItemLoader from '../../Components/ItemLoader/ItemLoader'
import '../../App.css'

const Home = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col min-h-screen">
      <main className="grow">
        <h1>{t("home.title")}</h1>
      </main>
      <ItemLoader/>  
      <Footer />
    </div>
  
  </>
  )
}

export default Home

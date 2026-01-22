import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import About from "./Components/About"
import FeaturedCollection from "./Components/FeaturedCollection"
import OrderProcess from "./Components/OrderProcess"
import Collections from "./Components/Collections"
import News from "./Components/News"
import StoreInfo from "./Components/StoreInfo"
import Footer from "./Components/Footer"
import './App.css'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About/>
      <FeaturedCollection />
      <OrderProcess />
      <Collections />
      <News />
      <StoreInfo />
      <Footer />
    </>
  )
}

export default App

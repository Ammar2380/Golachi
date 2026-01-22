import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import About from "./Components/About"
import FeaturedCollection from "./Components/FeaturedCollection"
import OrderProcess from "./Components/OrderProcess"
import Collections from "./Components/Collections"
import News from "./Components/News"
import StoreInfo from "./Components/StoreInfo"
import Footer from "./Components/Footer"
import { CartProvider } from "./Components/CartContext" // 1. Import the Provider
import './App.css'

const App = () => {
  return (
    // 2. Wrap everything in the CartProvider
    <CartProvider>
      <Navbar />
      <Hero />
      <About/>
      <FeaturedCollection />
      <OrderProcess />
      <Collections />
      <News />
      <StoreInfo />
      <Footer />
    </CartProvider>
  )
}

export default App
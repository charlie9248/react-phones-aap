import {Route , Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Cart from './pages/CartPage'
import NotFound from './pages/NotFoundPage'
import Product from './pages/ProductPage'
import ProductDetails from './pages/ProductDetails'
import './App.css'


const App = () => {
  return (
    <>
    <Navbar/>
      <Routes>
      <Route path='/'  element={<Product/>}/>
      <Route path='/cart'  element={<Cart/>}/>
      <Route path='/details'  element={<ProductDetails/>}/>
      <Route path='/notFound'  element={<NotFound/>}/>
    </Routes>
    </>
  )
}

export default App


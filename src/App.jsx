import './App.css'
import Navbar from './components/nabvar'
import ItemListContainer from './components/intemListConteiner'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductView from './components/View/ProductView/ItemDetailContainer'
import { ProductsProvider } from './context/ProductsContext'
import { CartContext, CartProvider } from './context/CartContext'
import Cart from './components/Cart'


function App() {
 


  return (
    <BrowserRouter >
      <ProductsProvider>
        <CartProvider>

        <Navbar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/:category" element={<ItemListContainer />} />
          <Route exact path="/:category" element={<ItemListContainer />} />
          <Route exact path="/:category" element={<ItemListContainer />} />
          <Route exact path="/Product/:id" element={<ProductView />} />
          <Route exact path="/cart" element={<Cart />} /> {/* Ruta del carrito */}
        </Routes>
        
        </CartProvider>
      </ProductsProvider>
    </BrowserRouter>
  );
}
export default App
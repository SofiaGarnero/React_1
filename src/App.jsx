import './App.css'
import Navbar from './components/nabvar'
import ItemListContainer from './components/intemListConteiner'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ProductView from './components/View/ProductView/ItemDetailContainer'


function App() {
  
  return (
    <BrowserRouter >
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<ItemListContainer />} />
        <Route exact path="/:category" element={<ItemListContainer />} />
         <Route exact path="/:category" element={<ItemListContainer />} />
        <Route exact path="/:category" element={<ItemListContainer />} /> 

        <Route exact path="/Product/:id" element={<ProductView />} />
      </Routes>
    </BrowserRouter>
    
  )
}
export default App
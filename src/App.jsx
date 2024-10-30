import { useState } from 'react'
import './App.css'
import Navbar from './components/nabvar'
import ItemListContainer from './components/intemListConteiner'
import { ProductList } from './components/ProductView/asynmock'
import TaskList from './components/ItemList'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Tienda from './components/View/Tienda'
import Fragancia from './components/View/Fragancia'
import CuidadosDiarios from './components/View/CuidadosDiarios'
import Cabellos from './components/View/Cabellos'
import ProductView from './components/View/ProductView/ItemDetailContainer'


function App() {
  
  return (
    <BrowserRouter >
      <Navbar/>
      <ItemListContainer greeting='Bienvenido/a a mi Tienda'/>
      {/* <TaskList ProductList={ProductList}/> */}
      <Routes>
        <Route exact path="/" element={<Tienda />} />
        <Route exact path="/Fragancia" element={<Fragancia />} />
        <Route exact path="/Cuidados" element={<CuidadosDiarios />} />
        <Route exact path="/Cabellos" element={<Cabellos />} />
        <Route exact path="/Product/:id" element={<ProductView />} />
      </Routes>
    </BrowserRouter>
    
  )
}
export default App
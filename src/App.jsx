import { useState } from 'react'
import './App.css'
import Navbar from './components/nabvar'
import ItemListContainer from './components/intemListConteiner'
import ProductCard from './components/item'
import { ProductList } from './components/ProductView/asynmock'
import TaskList from './components/ItemList'

function App() {
  
  return (
    <div>
      <Navbar/>
      //<ItemListContainer greeting='Bienvenido/a a mi Tienda'/>
      <TaskList ProductList={ProductList}/>
    </div>
    
  )
}
export default App
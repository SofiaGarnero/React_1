import { useState } from 'react'
import './App.css'
import Navbar from './components/nabvar'
import ItemListContainer from './components/intemListConteiner'
import { ProductList } from './components/ProductView/asynmock'
import TaskList from './components/ItemList'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {
  
  return (
    <BrowserRouter >
      <Navbar/>
      //<ItemListContainer greeting='Bienvenido/a a mi Tienda'/>
      <TaskList ProductList={ProductList}/>
    </BrowserRouter>
    
  )
}
export default App
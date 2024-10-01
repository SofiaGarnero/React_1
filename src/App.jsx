import { useState } from 'react'
import './App.css'
import Navbar from './components/nabvar'
import ItemListContainer from './components/intemListConteiner'
import Promises from './components/conteiner/promises'
import {BrowserRouter,Routes,Route} from "react-router-dom"



function App() {
  const [categoria, setCategoria] = useState('todos')

  return (
    <>
      <BrowserRouter>
      <Navbar handleCategoria={setCategoria}/>
      <Routes>
      <Route path='/' element ={<ItemListContainer/> }/>
      <Route path='/category/:idCategory' element ={<ItemListContainer/> }/>
        {/* <Route path='/category/inicio' element ={<Inicio/> }/> */}
      </Routes>
      <Promises />
      </BrowserRouter>
    </>
   
    
  )
}

export default App

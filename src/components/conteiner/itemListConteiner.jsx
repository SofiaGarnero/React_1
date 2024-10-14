import React from "react";
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { getProducts } from "../data/asynmock";



const ItemListContainer = ({ categoria }) => {
  const [itemList, setList] = useState([])


  const { idCategory } = useParams()

       useEffect(() => {
           getProducts(idCategory)
          .then(res => setList(res))
           .catch(err => console.log(err))
     }, [])

console.log("parametros :", idCategory)

  return (
    <div>
      <h3>{idCategory?<>categoria:{idCategory}</>:<>Inicio</>}</h3> 
      {itemList.map((product) => <p key={product.id}>{product.title}</p>)}
    </div>
  )

}
export default ItemListContainer
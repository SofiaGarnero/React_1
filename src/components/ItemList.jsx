
import { useEffect, useState } from "react";
import ProductCard from "./item";
import { ProductList } from "./ProductView/asynmock"

function TaskList({productList}) {

    const [products, setProducts] = useState([]);

    return(
        <>
       <h2> lista de productos </h2>
       {ProductList.map(lista => (
        <ProductCard key={lista.id} lista={lista} />
       ) )}
        </>
    );
}

export default TaskList;
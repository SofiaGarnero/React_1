
import { useEffect, useState } from "react";
import ProductCard from "./item";
import { getProducts, ProductList } from "./ProductView/asynmock"

function TaskList({productList}) {

    const [products, setProducts] = useState([]);
    
    useEffect(()=>{
        getProducts.then(data => setProducts(data));
    }, []);

    return(
        <>
       {ProductList.map(lista => (
        <ProductCard key={lista.id} lista={lista} />
       ) )}
        </>
    );
}

export default TaskList;
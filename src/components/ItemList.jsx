
import { useEffect, useState } from "react";
import ProductCard from "./item";
import { getProducts, ProductList } from "./ProductView/asynmock"

function TaskList() {

    const [products, setProducts] = useState([]);
    
    useEffect(()=>{
        getProducts.then(data => setProducts(data));
    }, []);

    return(
        <>
       {products.map(product => (
        <ProductCard key={product.id} lista={product} />
       ) )}
        </>
    );
}

export default TaskList;
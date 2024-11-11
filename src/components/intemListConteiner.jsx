
import { useContext, useEffect, useState } from "react";
import ProductCard from "./item";
import { getCategory, getProducts } from "./ProductView/asynmock"
import { useParams } from "react-router-dom";
import { ProductsContext } from "../context/ProductsContext";

function ItemListContainer() {
    const [products, setProducts] = useState([]);
    const { category } = useParams();
    const [product,setProduct] = useContext(ProductsContext);
    console.log(category)

    
    useEffect(()=>{
        if (category) { 
       const filteredProducts = getCategory(category);
        setProducts(filteredProducts);
     } else {   
        getProducts.then(data => setProducts(data));
    }
     }, [category]);

    return(
        <>
       {products.map(product => (
        <ProductCard key={product.id} lista={product} />
       ) )}
        </>
    );
}

export default ItemListContainer;
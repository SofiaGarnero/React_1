import { createContext, useEffect, useState } from "react";
import { ProductList } from "../components/ProductView/asynmock";


//lo q tenemmos q consumir
export const ProductsContext = createContext(false);

////el q provee acceso al contexto
export function ProductsProvider ({children}) {
    const [products, setProducts] = useState ([]);

    useEffect(() =>{
         setProducts(ProductList);

    },[]);

    return(
        <ProductsContext.Provider value={[products,setProducts]}>
            {children}
        </ProductsContext.Provider>
    )
}
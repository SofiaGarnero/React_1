import React, { useContext } from "react";
import Button from 'react-bootstrap/Button';
import { CartContext } from "../context/CartContext";

const CartwidgetA = () => {

  const [cart] = useContext(CartContext);

   return(
    <>
       <Button variant="dark">🛒 <p>{cart.length}</p></Button>
      
      </>
       
    );
}

export default CartwidgetA;
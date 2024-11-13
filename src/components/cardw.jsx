import React, { useContext } from "react";
import Button from 'react-bootstrap/Button';
import { CartContext } from "../context/CartContext";

const CartwidgetA = () => {

  const {cart} = useContext(CartContext);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

   return(
    <>
       <Button variant="dark">🛒 <p>{totalItems}</p></Button>
      
      </>
       
    );
}

export default CartwidgetA;
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, removeItem, clearCart } = useCart();

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  if (!cart || cart.length === 0) {
    return (
      <div>
        <h2>Tu carrito está vacío</h2>
        <p>No hay ítems en el carrito.</p>
        <Link to="/">Volver a la tienda</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>Resumen de tu carrito</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            <h3>{item.name}</h3>
            <p>Cantidad: {item.quantity}</p>
            <p>Precio unitario: ${item.price.toFixed(2)}</p>
            <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
            <button onClick={() => removeItem(item.id)}>Eliminar ítem</button>
          </li>
        ))}
      </ul>
      <h3>Total: ${getTotalPrice().toFixed(2)}</h3>
      <button onClick={clearCart}>Vaciar Carrito</button>
    </div>
  );
};

export default Cart;
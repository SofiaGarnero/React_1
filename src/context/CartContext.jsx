import { createContext, useContext ,useState } from "react";



export const CartContext = createContext();

export function CartProvider({children}){
    const [cart,setCart] = useState([]);

    const addItem = (item) => {
        setCart((prevCart) => {
            // Verificar si el producto ya está en el carrito
            const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
            
            if (existingItem) {
                // Si ya está en el carrito, actualizamos la cantidad
                return prevCart.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
                        : cartItem
                );
            }
            
            // Si no está en el carrito, lo agregamos
            return [...prevCart, item];
        });
    };

    const removeItem = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    const clearCart = () => {
        setCart([]);
    };


    return (
        <CartContext.Provider value={{cart, addItem,removeItem,clearCart}}>
            {children}
        </CartContext.Provider>
    )
}
export const useCart = () => useContext(CartContext);
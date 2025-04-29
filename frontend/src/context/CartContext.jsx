import { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        const existingItem = cart.find((i) => i.id === item.id);
        if (existingItem) {
            setCart(cart.map((i) =>
                i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
            ));
        } else {
            setCart([...cart, { ...item, quantity: 1 }]);
        }
    };

    const removeFromCart = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    };

    const clearCart = () => {
        setCart([]);
    };

    const increaseQuantity = (id) => {
        setCart(cart.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        ));
    };

    const decreaseQuantity = (id) => {
        setCart(cart.map((item) =>
            item.id === id
                ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
                : item
        ));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity }}>
            {children}
        </CartContext.Provider>
    );
}

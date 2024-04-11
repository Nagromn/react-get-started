import { useState, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (dish) => {
        const newCart = [...cart];
        const dishIndexExist = newCart.findIndex(
            (product) => product.id === dish.id
        );

        if (dishIndexExist === -1) {
            dish.quantity = 1;
            newCart.push(dish);
        } else {
            newCart[dishIndexExist].quantity++;
        }

        setCart(newCart);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};

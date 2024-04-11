import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext.jsx";

const useTotalCart = () => {
    const { cart } = useContext(CartContext);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        let amount = 0;
        cart.forEach((product) => {
            amount += product.price * product.quantity;
        });
        setTotalAmount(amount);
    }, [cart]);

    return {
        totalAmount,
    };
};

export default useTotalCart;

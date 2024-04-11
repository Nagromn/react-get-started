import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext.jsx";

const useTotalQuantity = () => {
    const { cart } = useContext(CartContext);
    const [totalQuantity, setTotalQuantity] = useState(0);

    useEffect(() => {
        let quantity = 0;
        cart.forEach((product) => {
            quantity += product.quantity;
        });
        setTotalQuantity(quantity);
    }, [cart]);

    return {
        totalQuantity,
    };
};

export default useTotalQuantity;

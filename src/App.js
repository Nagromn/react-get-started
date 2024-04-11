import "../src/App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./components/Layout";
import DishDetails from "./pages/DishDetails";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import { useState } from "react";

function App() {
    const [cart, setCart] = useState([]);

    const addToCart = (dish) => {
        setCart([...cart, dish]);
    };

    return (
        <div className="App">
            <Routes>
                <Route element={<Layout cart={cart} />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route
                        path="plat/:slug"
                        element={<DishDetails addToCart={addToCart} />}
                    />
                    <Route path="cart" element={<Cart cart={cart} />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;

import "../src/App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./components/Layout";
import DishDetails from "./pages/DishDetails";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import { Helmet, HelmetProvider } from "react-helmet-async";

function App() {
    const title = "Mexican Food";

    return (
        <HelmetProvider>
            <div className="App">
                <Helmet>
                    <title>{title}</title>
                    <meta
                        name="description"
                        content="Savourez les meilleurs plats mexicains chez vous : tacos, burritos, enchiladas. Cuisine
                            authentique et livraison rapide"
                    />
                </Helmet>
                <Routes>
                    <Route element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="plat/:slug" element={<DishDetails />} />
                        <Route path="cart" element={<Cart />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </div>
        </HelmetProvider>
    );
}

export default App;

import "../src/App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import DishDetails from "./pages/DishDetails";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="plat/:slug" element={<DishDetails />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;

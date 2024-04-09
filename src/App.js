import "../src/App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <Routes>
                    <Route index element={<Home />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;

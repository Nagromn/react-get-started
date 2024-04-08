import Header from "./components/Header";
import Footer from "./components/Footer";
import Tacos from "./components/Tacos";
import Enchiladas from "./components/Enchiladas";
import MolePoblano from "./components/MolePoblano";

function App() {
    return (
        <div className="App">
            <Header />
            <Tacos />
            <Enchiladas />
            <MolePoblano />
            <Footer />
        </div>
    );
}

export default App;

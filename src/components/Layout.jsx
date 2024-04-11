import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const Layout = ({ cart }) => {
    return (
        <>
            <Header cart={cart} />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default Layout;

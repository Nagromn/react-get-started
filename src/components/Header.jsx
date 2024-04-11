import "../assets/styles/header.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../assets/images/man-3262834_960_720.webp";
import { NavLink } from "react-router-dom";
import { CartContext } from "../utils/context/CartContext";
import { useContext } from "react";
import useTotalQuantity from "../utils/hooks/useTotalQuantity";

const Header = () => {
    const { cart } = useContext(CartContext);
    const { totalQuantity } = useTotalQuantity(cart);

    return (
        <header>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <NavLink to="/" className="nav-link nav-brand">
                        <img
                            src={logo}
                            className="d-inline-block align-top"
                            alt="Man"
                        />
                    </NavLink>
                    <Nav className="justify-content-end">
                        <NavLink to="/" className="nav-link">
                            Accueil
                        </NavLink>
                        <NavLink to="/about" className="nav-link">
                            A propos
                        </NavLink>
                        <NavLink to="/cart" className="nav-link">
                            Panier ({totalQuantity || 0})
                        </NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;

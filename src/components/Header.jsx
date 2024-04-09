import "../assets/styles/header.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../assets/images/man-3262834_960_720.webp";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            src={logo}
                            className="d-inline-block align-top"
                            alt="Man"
                        />
                    </Navbar.Brand>
                    <Nav className="justify-content-end">
                        <NavLink to="/" className="nav-link">
                            Accueil
                        </NavLink>
                        <NavLink to="/about" className="nav-link">
                            A propos
                        </NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;

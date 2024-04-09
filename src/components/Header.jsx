import "../assets/styles/header.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../assets/images/man-3262834_960_720.webp";

const Header = () => {
    return (
        <header>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src={logo}
                            className="d-inline-block align-top"
                            alt="Man"
                        />
                    </Navbar.Brand>
                    <Nav className="justify-content-end">
                        <Nav.Link href="#home">Accueil</Nav.Link>
                        <Nav.Link href="#about">A propos</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;

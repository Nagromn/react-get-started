import "../assets/styles/header.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Header = () => {
    return (
        <header>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src="https://cdn.pixabay.com/photo/2018/03/26/14/18/man-3262834_960_720.png"
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

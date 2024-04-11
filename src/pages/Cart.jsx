import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";
import { useContext } from "react";
import { CartContext } from "../utils/context/CartContext";

const Cart = () => {
    const { cart } = useContext(CartContext);

    return (
        <>
            <Container>
                <Row>
                    <h1>Panier</h1>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Nom</th>
                                <th>Prix</th>
                                <th>Quantité</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((dish, index) => (
                                <tr key={index}>
                                    <td>{dish.name}</td>
                                    <td>{dish.price}€</td>
                                    <td>{dish.quantity}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Row>
            </Container>
        </>
    );
};

export default Cart;

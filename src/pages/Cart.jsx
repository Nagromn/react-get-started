import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";

const Cart = ({ cart }) => {
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
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((dish, index) => (
                                <tr key={index}>
                                    <td>{dish.name}</td>
                                    <td>{dish.price}€</td>
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

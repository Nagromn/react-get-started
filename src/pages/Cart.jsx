import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";
import { useContext } from "react";
import { CartContext } from "../utils/context/CartContext";
import useTotalCart from "../utils/hooks/useTotalCart";
import useTotalQuantity from "../utils/hooks/useTotalQuantity";

const Cart = () => {
    const { cart } = useContext(CartContext);
    const { totalAmount } = useTotalCart(cart);
    const { totalQuantity } = useTotalQuantity(cart);

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
                    <p className="text-end">
                        {totalQuantity} éléments dans le panier
                    </p>
                    <p className="text-end">
                        Montant : <strong>{totalAmount}€</strong>
                    </p>
                </Row>
            </Container>
        </>
    );
};

export default Cart;

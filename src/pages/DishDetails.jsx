import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import dishesData from "../data/dishes.json";
import { useEffect, useState, useContext } from "react";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../utils/context/CartContext";
import { Helmet } from "react-helmet-async";

const DishDetails = () => {
    const { slug } = useParams();
    const [dish, setDish] = useState(null);
    const navigate = useNavigate();
    const { addToCart } = useContext(CartContext);
    const title = dish ? dish.name : "Plat non trouvé";

    useEffect(() => {
        const getSlug = dishesData.find((dish) => dish.slug === slug);

        if (!getSlug) {
            navigate("/plat-non-trouve");
            return;
        }

        setDish(getSlug);
    }, [slug, navigate]);

    if (!dish) {
        return <div>Chargement...</div>;
    }

    return (
        <>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            {dish && (
                <Container>
                    <Row>
                        <Col>
                            <img src={dish.image} alt={dish.name} />
                        </Col>
                        <Col>
                            <h1>{dish.name}</h1>
                            <p>{dish.description}</p>
                            <p>
                                <strong>{dish.price}€</strong>
                            </p>
                            <Button
                                variant="primary"
                                onClick={() => addToCart(dish)}
                            >
                                Commander
                            </Button>
                        </Col>
                    </Row>
                </Container>
            )}
        </>
    );
};

export default DishDetails;

import Dish from "../components/Dish";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import dishesData from "../data/dishes.json";
import { Helmet } from "react-helmet-async";

const Home = () => {
    const [showNewOnly, setShowNewOnly] = useState(false);
    const [dishes, setDishesData] = useState([]);
    const title = "Mexican Food";

    useEffect(() => {
        const filteredDishes = () => {
            return showNewOnly
                ? dishesData.filter((dish) => dish.new)
                : dishesData;
        };
        setDishesData(filteredDishes);
    }, [showNewOnly]);

    const handleShowNewOnly = () => {
        setShowNewOnly(!showNewOnly);
    };

    return (
        <>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <Container>
                <Button variant="primary" onClick={handleShowNewOnly}>
                    {!showNewOnly
                        ? "Nouveautés uniquement"
                        : "Voir tous les plats"}
                </Button>
                <Row>
                    {dishes.length > 0 &&
                        dishes.map((dish) => (
                            <Col key={dish.id}>
                                <Dish {...dish} />
                            </Col>
                        ))}
                </Row>
            </Container>
        </>
    );
};

export default Home;

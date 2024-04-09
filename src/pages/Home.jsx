import Dish from "../components/Dish";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <Dish
                            image="https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg"
                            alt="Tacos à l’unité"
                            name="Tacos à l’unité"
                            price="3€"
                            slug="tacos-a-l-unite"
                        />
                    </Col>
                    <Col>
                        <Dish
                            image="https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg"
                            alt="Enchiladas"
                            name="Enchiladas"
                            price="12€"
                            slug="enchiladas"
                        />
                    </Col>
                    <Col>
                        <Dish
                            image="https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg"
                            alt="Mole poblano"
                            name="Mole poblano"
                            price="15€"
                            slug="mole-poblano"
                        />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Home;

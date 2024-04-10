import Dish from "../components/Dish";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = () => {
    const dishes = [
        {
            id: 1,
            image: "https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg",
            alt: "Tacos à l’unité",
            name: "Tacos à l’unité",
            price: 3,
            slug: "tacos-a-l-unite",
        },
        {
            id: 2,
            image: "https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg",
            alt: "Enchiladas",
            name: "Enchiladas",
            price: 12,
            slug: "enchiladas",
        },
        {
            id: 3,
            image: "https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg",
            alt: "Mole poblano",
            name: "Mole poblano",
            price: 15,
            slug: "mole-poblano",
        },
    ];

    return (
        <>
            <Container>
                <Row>
                    {dishes.map((dish) => (
                        <Col key={dish.id}>
                            <Dish
                                image={dish.image}
                                alt={dish.alt}
                                name={dish.name}
                                price={`${dish.price}€`}
                                slug={dish.slug}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
};

export default Home;

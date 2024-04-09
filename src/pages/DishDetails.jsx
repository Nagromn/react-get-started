import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const DishDetails = () => {
    const { slug } = useParams();

    return (
        <>
            <Container>
                <Row>
                    <h1>{slug}</h1>
                </Row>
            </Container>
        </>
    );
};

export default DishDetails;

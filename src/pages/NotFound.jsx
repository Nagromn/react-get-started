import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
    const title = "Erreur";

    return (
        <>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <Container>
                <Row>
                    <h1>Page non trouvée</h1>
                </Row>
            </Container>
        </>
    );
};

export default NotFound;

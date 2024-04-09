import "../assets/styles/dish.css";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Dish = (props) => {
    return (
        <>
            <Link to={`plat/${props.slug}`}>
                <Card>
                    <Card.Img variant="top" src={props.image} alt={props.alt} />
                    <Card.Body>
                        <Card.Title>{props.name}</Card.Title>
                        <Card.Text>Prix : {props.price}</Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        </>
    );
};

export default Dish;

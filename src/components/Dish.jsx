import "../assets/styles/dish.css";
import Card from "react-bootstrap/Card";

const Dish = (props) => {
    return (
        <Card>
            <Card.Img variant="top" src={props.image} alt={props.alt} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>Prix : {props.price}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Dish;

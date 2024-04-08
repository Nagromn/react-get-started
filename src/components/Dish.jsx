import "../assets/styles/dish.css";

const Dish = (props) => {
    return (
        <div>
            <img src={props.image} alt={props.alt} />
            <h2>{props.name}</h2>
            <strong>Prix : {props.price}</strong>
        </div>
    );
};

export default Dish;

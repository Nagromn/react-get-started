import "../assets/styles/dish.css";

const Dish = () => {
    return (
        <div>
            <div>
                <img
                    src="https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg"
                    alt="Tacos à l’unité"
                />
                <h2>Tacos à l’unité</h2>
                <strong>Prix : 3€</strong>
            </div>
            <div>
                <img
                    src="https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg"
                    alt="Enchiladas"
                />
                <h2>Enchiladas</h2>
                <strong>Prix : 12€</strong>
            </div>
            <div>
                <img
                    src="https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg"
                    alt="Mole poblano"
                />
                <h2>Mole poblano</h2>
                <strong>Prix : 15€</strong>
            </div>
        </div>
    );
};

export default Dish;

import "../assets/styles/header.css";

const Header = () => {
    return (
        <header>
            <div>
                <img
                    src="https://cdn.pixabay.com/photo/2018/03/26/14/18/man-3262834_960_720.png"
                    alt="Man"
                />
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="/#">Home</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;

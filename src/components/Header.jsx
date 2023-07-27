import { NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
    return (
        <nav className="bg-primary">
            <ul>
                <li>
                    <NavLink exact to="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Header;

import React from "react";
import "./Home.css";
import Admin from "./Admin";
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/Admin">Admin</Link></li>
                    <li><Link to="#">HomePage</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;

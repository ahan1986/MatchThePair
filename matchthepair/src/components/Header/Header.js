import React from "react";
import "./Header.css";

const Header = props => (
    <nav className="navbar jumbotron">
        <h2>Clicky Game!</h2>
        <h2>Click an image to begin!</h2>
        <h2>Score: {props.currentScore}</h2>
    </nav>
);

export default Header;
import React from "react";
import "./Body.css";

const Body = props => (
    <div className="wrapper btn">
    <button onClick={() => props.handleInputClick(props.id)} ><div className="cards">
            <img alt="pokemon" src={props.image} />
        </div></button>
    </div>
);

export default Body;
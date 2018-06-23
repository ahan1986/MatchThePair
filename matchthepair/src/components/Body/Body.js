import React from "react";
import "./Body.css";

const Body = props => (
    <div>
        <div className="cards">
            <img key={props.i} alt="pokemon" src={props.image} />
        </div>
    </div>
);

export default Body;
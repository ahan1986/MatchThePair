import React from "react";
import "./Winner.css";

const Winner = props => (
    <div className="winnerDiv">
        <h1 className="winnerh1">Winner!</h1>
        <h2 className="winnerh2">Play Again?</h2>
        <button className="winnerbutton btn btn-primary" onClick={props.restartGame}>Play Again!</button>
    </div>
);

export default Winner;
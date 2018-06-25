import React from "react";
import "./Loser.css";

const Loser = props => (
    <div className="loserDiv">
        <h1 className="loserh1">You Lost!</h1>
        <h2 className="loserh2">You Should Redeem yourself and play again!</h2>
        <button className="loserbutton btn btn-danger" onClick={props.restartGame}>Play Again!</button>
    </div>
);

export default Loser;
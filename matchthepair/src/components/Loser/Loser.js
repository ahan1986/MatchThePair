import React from "react";

const Loser = props => (
    <div className="loserDiv">
        <h1>You Lost!</h1>
        <h2>You Should Redeem yourself and play again!</h2>
        <button onClick={props.restartGame}>Play Again!</button>
    </div>
);

export default Loser;
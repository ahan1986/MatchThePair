import React, { Component } from 'react';
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TopMidBody from "./components/TopMidBody";
import pokemon from "./pokemon.json";
import Loser from "./components/Loser";
import Winner from "./components/Winner";

class App extends Component {
  state = {
    pokemon,
    score: 0,
    selected: [],
    page: "Winner"
  };

  handleInputClick = event => {
    //couple ways of displaying the array instead of using push() because push() returns the length of the array instead the array itself. SO use concat() OR use es6 such as selected: [...this.state.selected, event]

    // const selectedID = this.state.selected.concat(event);
    // const selectedID2 = [...this.state.selected, event];

    const condition = this.state.selected;

    if (condition.length === 11 || this.state.score === 11) {

      this.setState({
        score: this.state.score + 1
      });

      return this.wonTheGame();

    } else {
      // ternary operator saying if the clicked image's id equals anything in the selected array, then go to restartGame function or else go to handleScore function which will add a point to the score.
      return condition.includes(event) ? this.LosingTheGame() : this.handleScore(event);
    }
  };

  wonTheGame = event => {
    
    this.setState({
      page: "Winner"
    });
  };

  LosingTheGame = event => {
    this.setState({
      page: "Loser"
    });
  };

  restartGame = event => {
    // restart the score and the game
    this.setState({
      page: "",
      score: 0,
      selected: []
    });

  };

  handleScore = event => {

    this.setState({
      selected: [...this.state.selected, event],
      score: this.state.score + 1
    });

  };

  renderPage = page => {

    if (page === "Winner") {
      // just realized that you cannot define function like this.restartGame(). You must take away the "()"  had a warning: Warning: setState(…): Cannot update during an existing state transition
      return <Winner restartGame={this.restartGame} />;
    } else if (page === "Loser") {
      return <Loser restartGame={this.restartGame} />;
    } else {
      return (
        /* this sort method is design to randomize the list of pokemon images */
        this.state.pokemon.sort(() => 0.5 - Math.random()).map((pokemons, i) => {
          return (
            <Body
              key={pokemons.id}
              id={pokemons.id}
              image={pokemons.image}
              // method that will listen for the onClick in the Body.js button and there wait for the value of the parameter which will be the respective id(props.id) which will be the event for handleInputClick function
              handleInputClick={this.handleInputClick}
            />
          )
        })
      );
    }
  };

  render() {
    return (
      <div className="App">

        <Header
          currentScore={this.state.score}
        />

        <TopMidBody />

        {this.renderPage(this.state.page)}

        <Footer />

      </div>
    );
  }
};

export default App;

import React, { Component } from 'react';
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TopMidBody from "./components/TopMidBody";
import pokemon from "./pokemon.json";

class App extends Component {
  state = {
    pokemon,
    score: 0,
    selected: []
  };

  handleInputClick = event => {
    //couple ways of displaying the array instead of using push() because push() returns the length of the array instead the array itself. SO use concat() OR use es6 such as selected: [...this.state.selected, event]
    
    // const selectedID = this.state.selected.concat(event);
    // const selectedID2 = [...this.state.selected, event];
    
    const condition = this.state.selected;

    this.setState({
      selected: [...this.state.selected, event]
    });
    console.log(this.state.score);

    return condition.includes(event) ? this.restartGame() : this.handleScore();

    

  };

  restartGame = event => {
    // have a modal saying you lost 

    // restart the score and the game
    this.setState({
      score: 0
    });

  };

  handleScore = event => {

    this.setState({
      score: this.state.score + 1
    });

  };

  render() {
    return (
      <div className="App">

        <Header 
        currentScore={this.state.score}
        />

        <TopMidBody />

        {this.state.pokemon.sort(() => 0.5 - Math.random()).map((pokemons, i) => {
          return (
            <Body
              key={pokemons.id}
              id={pokemons.id}
              image={pokemons.image}
              // method that will listen for the onClick in the Body.js button and there wait for the value of the parameter which will be the respective id(props.id) which will be the event for handleInputClick function
              handleInputClick={this.handleInputClick}
            />
          )
        })}

        <Footer />
        
      </div>
    );
  }
};

export default App;

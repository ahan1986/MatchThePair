import React, { Component } from 'react';
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import TopMidBody from "./components/TopMidBody";
import pokemon from "./pokemon.json";

class App extends Component {
  state = {
    pokemon
  };

  render() {
    return (
      <div className="App">
        <Header />
        <TopMidBody />
        {this.state.pokemon.sort(() => 0.5 - Math.random()).map((pokemons, i) => {
          return (
            <Body 
              i = {i}
              id = {pokemons.id}
              image = {pokemons.image}
            />
          )
        })}
        <Footer />
      </div>
    );
  }
}

export default App;

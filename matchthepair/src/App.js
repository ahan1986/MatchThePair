import React, { Component } from 'react';
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TopMidBody from "./components/TopMidBody";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <TopMidBody />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';

import PageBody from './PageBody';

import dino from './assets/dino.png';
import './assets/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={dino} alt="dino" className="App-dino" />
          <h1 className="App-title">Dinosaur Fact Generator</h1>
        </header>
        <PageBody />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './assets/PageBody.css';

import Facts from './Facts';

class PageBody extends Component {
  constructor() {
    super();
    this.onGetFactClick = () => this._onGetFactClick();
  }

  state = {
    fact: {
      title: 'Click the button to get a dino fact!',
      text: ''
    },
    previousFactIndex: null
  }

  _onGetFactClick() {
    const randomIndex = Math.floor(Math.random() * Math.floor(Facts.length))
    if (randomIndex === this.state.previousFactIndex) {
      return this._onGetFactClick();
    }

    this.setState({
      fact: Facts[randomIndex],
      previousFactIndex: randomIndex
    });
  }

  render() {
    return (
      <div className="PageBody">
        <button onClick={this.onGetFactClick}>Get Fact</button>

        <h2>{this.state.fact.title}</h2>

        <p>{this.state.fact.text}</p>
      </div>
    );
  }
}

export default PageBody;

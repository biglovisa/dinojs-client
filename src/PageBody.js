import React, { Component } from 'react';
import './assets/PageBody.css';

class PageBody extends Component {
  constructor() {
    super();
    this.onGetFactClick = () => this._onGetFactClick();
  }

  state = {
    fact: {
      title: 'Click the button to get a dino fact!',
      text: ''
    }
  }

  _onGetFactClick() {
    fetch('http://localhost:4000/facts/dino', {
      dataType: 'JSON',
      headers: {
        'Content-Type': 'application/json',
         'Accept': 'application/json',
      },
      method: 'GET',
      mode: 'cors'
    })
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(res => {
      this.setState({ fact: res.body });
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

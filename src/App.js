import React, { Component } from 'react';
import brad from './brad.svg';
import './App.css';
 

class App extends Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">
          <img src={brad} className="App-logo" alt="brad" />
          <h1 className="App-title">My React App</h1>
        </header>
        <p className="App-intro">
          Wow, I won't ever have to refresh a web page again.
        </p>
      </div>
    );
  }
}

export default App;

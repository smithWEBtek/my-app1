import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const title = React.createElement('h2', {color: 'blue', size: 'medium'}, 'My First React Code');

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to My Almost First React App</h1>
        </header>
        <p className="App-intro">
          <p>To get started, edit <code>src/App.js</code> and save to reload.</p>
          Wow, I won't ever have to refresh a web page again.
        </p>
        <p>{title}</p>
        <em><strong>{title.props.color}</strong></em>
        <h2>{title.props.size}</h2>
      </div>
    );
  }
}

export default App;

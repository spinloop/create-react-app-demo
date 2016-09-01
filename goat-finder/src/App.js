import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React Goat</h2>
        </div>
        <img src="https://s3-us-west-2.amazonaws.com/goatz/goat.jpg" />
      </div>
    );
  }
}

export default App;

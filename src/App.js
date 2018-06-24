import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App :)</h1>
        <p>This is really working!</p>
        <Person name="Hardy" age="28" />
        <Person name="Aaron" age="21">My Hobbies : Racing</Person>
        <Person name="Olivia" age="19"/>
      </div>
    );
  }
}

export default App;

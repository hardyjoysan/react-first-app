import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: "Hardy", age: "28" },
      { name: "Aaron", age: "25" },
      { name: "Olivia", age: "21" }
    ]
  }

  switchNameHandler = () => {

  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App :)</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Names</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;

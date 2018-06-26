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
    this.setState({
      persons: [
        { name: "Siddharth", age: "35" },
        { name: "Maxmillian", age: "30" },
        { name: "Brooklyn", age: "22" }
      ]
    });
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: "Siddharth", age: "35" },
        { name: event.target.value, age: "30" },
        { name: "Brooklyn", age: "22" }
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App :)</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Names</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          click={this.switchNameHandler} 
        />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age} 
          changed={this.nameChangeHandler}
        />
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} 
        />
      </div>
    );
  }
}

export default App;

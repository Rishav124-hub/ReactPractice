/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import {Greet1,Greet} from './Greet'
import Welcome from './Welcome'
import Hello from './Hello'

class App extends Component{
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <p>
            Hello World
          </p> */}
          <Welcome name="Abhishek" lastName="Kumar"></Welcome>
          <Welcome name="Shubham" lastName="Burman">
            <p>How Are you. Add This is children props. Using Class</p>
          </Welcome>
          <Welcome name="Sanket" lastName="Sinha"></Welcome>
          <Greet name="Abhishek" lastName="Kumar">
            <p>How Are you. And This is children props. Using Function </p>
          </Greet>
          <Greet name="Shubham" lastName="Burman"></Greet>
          <Greet name="Sanket" lastName="Sinha"></Greet>
          {/* <Greet1/> */}
          {/* <Hello/> */}
        </header>
      </div>
    );
  }
}

export default App;

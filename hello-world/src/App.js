/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import {Greet1,Greet} from './Greet'
import Welcome from './Welcome'
import Hello from './Hello'
import Message from './Message'
import Counter from './Counter'
import FunctionClick from './FunctionClick';
import ClassClick from './ClassClick';
import EventBind from './EventBind';
import ParentComponent from './ParentComponent';
import UserGreeting from './UserGreeting';
import NameList from './NameList';
import StyleSheet from './StyleSheet';
import Inline from './Inline';
import './AppStyle.css';
import style from './AppStyle.module.css'
import Form from './Form';

class App extends Component{
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Form></Form>
          <p className="error">Error</p>
          <p className={style.success}>Success</p>
          <Inline></Inline>
          <StyleSheet primary={true}></StyleSheet>
          <NameList></NameList>
          <UserGreeting></UserGreeting>
          <ParentComponent></ParentComponent>
          <EventBind></EventBind>
          <ClassClick></ClassClick>
          <FunctionClick></FunctionClick>
          <Counter></Counter>
          <Message></Message>
          <p>
            Hello World
          </p>
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
          <Greet1/>
          <Hello/>
        </header>
      </div>
    );
  }
}

export default App;

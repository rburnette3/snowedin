import React, { Component } from 'react';
import './App.css';
import Login from '../Login/Login';
import Firebase from '../firebase/firebase';





export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">

          <h2>Snowedin</h2>
        </div>

        <Login />
      </div>
    );
  }
}

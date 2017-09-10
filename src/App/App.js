import React, { Component } from 'react';
import './App.css';
import LoginContainer from '../Containers/LoginContainer';






export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">

          <h2>Snowedin</h2>
        </div>
          <LoginContainer />
        </div>
      );
    }
  }

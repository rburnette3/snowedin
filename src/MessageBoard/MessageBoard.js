import React, { Component } from 'react';
import './MessageBoard.css';
import { Route, NavLink, Link, Switch, Redirect } from 'react-router-dom';
import LoginContainer from '../Containers/LoginContainer';

class MessageBoard extends Component {
  constructor(){
    super()
    this.state = {

    }
  }

render() {
  return (
  <div>
    <h1>Message Board</h1>
  </div>
    )
  }
}

export default LoginContainer(MessageBoard)

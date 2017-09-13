import React, { Component } from 'react';
import './Search.css';
import { Route, NavLink, Link, Switch, Redirect } from 'react-router-dom';
import LoginContainer from '../Containers/LoginContainer';

export class Search extends Component {
  constructor() {
    super()
      this.state = {
        resortlist: []
      }

  }

  render() {
    const resortKey = {key: '54883438'};
    return(
      <div>
        <h1>Search Resorts</h1>
        <button onClick={() => { this.props.fetchData(resortKey)}}>Make Call</button>
      </div>
    )
  }
}

export default LoginContainer(Search);

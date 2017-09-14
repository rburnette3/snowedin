import React, { Component } from 'react';
import './Search.css';
import { Route, NavLink, Link, Switch, Redirect } from 'react-router-dom';
import LoginContainer from '../Containers/LoginContainer';

class Search extends Component {
  constructor() {
    super()
      this.state = {
        inputLocation: '',
        resortlist: []
      }
  }


  grabValue(e) {
    this.setState({
      [e.target.title]: e.target.value
  })
}


  render() {
    console.log('search',this.props);
    const resortKey = {key: '54883438'};
    return(
      <div>
        <h1>Search Resorts</h1>
        <input
          className='user-input' title='location' type="text" value={this.state.location}
          placeholder="Enter a Country"
          onChange={(e) => this.grabValue(e)} />
        <button onClick={() => { this.props.fetchData(resortKey)}}>Search</button>
      </div>
    )
  }
}


export default LoginContainer(Search);

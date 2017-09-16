import React, { Component } from 'react';
import './Search.css';
import { Route, NavLink, Link, Switch, Redirect } from 'react-router-dom';
import LoginContainer from '../Containers/LoginContainer';
import ResortCard from '../ResortCard/ResortCard';

class Search extends Component {
  constructor() {
    super()
      this.state = {
        location: '',
        resortlist: []
      }
  }

  grabValue(e) {
    this.setState({
      [e.target.title]: e.target.value
  })
}

  render() {

    console.log('THIS IS THE LOG',this.props, this.state, this.props.resortData.country);

    const resortKey = {key: '54883438'};

    if(this.props.resortData.country === this.state.location){
      return (
        <div>
          <ResortCard />
        </div>
      )
    }


    return(

      <div>
        <h1>Search Resorts</h1>
        <input
          className='user-input' title='location' type="text" value={this.state.location}
          placeholder="Enter a Country"
          onChange={(e) => this.grabValue(e)} />
        <button className='search-btn' onClick={(e) => {
                                                    e.preventDefault()
                                                    this.props.fetchData(resortKey)
                                                    }}
                                                    >Search</button>

      </div>
    )
  }
}


export default LoginContainer(Search);

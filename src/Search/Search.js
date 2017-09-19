import React, { Component } from 'react';
import './Search.css';
import { Route, NavLink, Link, Switch, Redirect } from 'react-router-dom';
import LoginContainer from '../Containers/LoginContainer';
import ResortCard from '../ResortCard/ResortCard';
import Signin from '../Login/Signin';


class Search extends Component {
  constructor() {
    super()
      this.state = {
        location: '',
        resortlist: [],
        user: ''
      }
  }

  grabValue(e) {
    this.setState({
      [e.target.title]: e.target.value
  })
}

  render() {
    const resortKey = {key: '54883438'};

    if(this.props.resortData.country === this.state.location){
      return (
        <div>
          <ResortCard props={this.props}  />
        </div>
      )
    }

    return(
      <div>
        <section className='search-wrapper'>
          <h1 className='search-title'>Search Resorts</h1>
            <select name='states' id='state-selector'>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="MN">Mikes State</option>
              <option value="UT">Utah</option>
            </select>
          <button className='search-btn' onClick={(e) => {
                                                    e.preventDefault()
                                                    this.props.fetchData(resortKey)
                                                    }}
                                                    >Search</button>

        </section>
      </div>
    )
  }
}


export default LoginContainer(Search);










// <input
//   className='user-input' title='location' type="text" value={this.state.location}
//   placeholder="Enter a Country"
//   onChange={(e) => this.grabValue(e)} />

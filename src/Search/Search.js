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
        resorts: []
      }
    this.handleSearch=this.handleSearch.bind(this);
  }
  grabValue(e) {
    this.setState({
      [e.target.title]: e.target.value
  })
}

  changeLocation(e) {

  }

  handleSearch() {
    this.props.handleFetch(this.state.location)

}


  render() {
    if(this.props.resortData.country === this.state.location){
      return (
        <div>
          <ResortCard props= {this.props}  />
        </div>
      )
    }

    return(
      <div>
        <section className='search-wrapper'>
          <h1 className='search-title'>Search Resorts</h1>
            <select id='list' title='location' value={this.state.location} onChange={(e)=>this.grabValue(e)}>
              <option >Choose a State</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="MN">Mikes State</option>
              <option value="UT">Utah</option>
            </select>
            <button className='search-btn' onClick={(e) => {
                                                    e.preventDefault()

                                                    this.handleSearch()


                                                    }}
                                                    >Search</button>

        </section>
      </div>
    )
  }
}


export default LoginContainer(Search);

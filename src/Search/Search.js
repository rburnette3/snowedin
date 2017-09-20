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
        location: ''
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
    fetch(`http://localhost:3001/api/v1/resorts/${this.state.location}`)
    .then(response => {
      if(response.status!==200){
        console.log('fail');
      }
      return response;
    })
    .then(response => response.json())
    
    // .then(response => Object.assign({}, {resort: response.resort, id: response.id}))
    .then(response => console.log(response))
    .catch(error => console.log('ERROR FOOL', error))
  }



  render() {
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
            <select id='list' title='location' value={this.state.location} onChange={(e)=>this.grabValue(e)}>
              <option >Choose a State</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="MN">Mikes State</option>
              <option value="UT">Utah</option>
            </select>
            <button className='search-btn' onClick={(e) => {
                                                    e.preventDefault()
                                                    console.log(this.state)

                                                    this.handleSearch()

                                                    }}
                                                    >Search</button>

        </section>
      </div>
    )
  }
}


export default LoginContainer(Search);

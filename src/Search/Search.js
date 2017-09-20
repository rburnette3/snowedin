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
        hasSearch:false

      }

    this.handleSearch=this.handleSearch.bind(this);
  }

  grabValue(e) {
    this.setState({
      [e.target.title]: e.target.value
  })
}

  handleSearch() {
    this.props.handleFetch(this.state.location)


}

  render() {
    const cards = this.props.fetchData && this.props.fetchData.length ? this.props.fetchData.map(place =>  <ResortCard {...place}/>) : null
    console.log(cards)
    return(

      <div>
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
        {cards ? cards : null}
      </div>
    </div>

    )
  }
}


export default LoginContainer(Search);

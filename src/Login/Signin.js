import React, { Component } from 'react';
import './Signin.css';
import firebase, { auth, provider } from '../firebase.js';
import { Route, NavLink, Link, Switch, Redirect } from 'react-router-dom';
import LoginContainer from '../Containers/LoginContainer';

 export class Signin extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      user: ''
    }

    this.signIn = this.signIn.bind(this);
  }


  grabValue(e) {
    this.setState({
      [e.target.title]: e.target.value
  })
}


signIn() {
  const {email, password} = this.state
  auth.signInWithEmailAndPassword(email, password)
  .then((response) => { console.log(response);
    this.props.loginSuccess(Object.assign({}, {id: response.uid}, {email: response.email}, {username: response.displayName} ))
  })
  .catch(err => console.log(this.store))
}


  render() {
    console.log('props: ', this.props)

    if(this.props.loginUser.email) {
      return <Redirect to={'/Search'} />
    }
    return(
      <div>
      <h1>Sign In</h1>

          <input
            className='user-input' title='email' type="email" value={this.state.email}
            placeholder="email"
            onChange={(e) => this.grabValue(e)} />
          <input
            className='user-input' title='password' type="password"
            placeholder="password"
            onChange={(e) => this.grabValue(e)} />
          <button className='form-btn' onClick={(e) => {
                                                    e.preventDefault()
                                                    this.signIn()
                                                    this.props.changeRoute('./')}}
                                                     >Log In</button>

      </div>
    )
  }
}

export default LoginContainer(Signin);

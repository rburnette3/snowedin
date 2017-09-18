import React, { Component } from 'react';
import './Signin.css';
import firebase, { auth, provider } from '../firebase.js';
import { Route, NavLink, Link, Switch, Redirect } from 'react-router-dom';
import LoginContainer from '../Containers/LoginContainer';

class Signup extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      user: ''
    }

    this.signUp = this.signUp.bind(this);
  }


  grabValue(e) {
    this.setState({
      [e.target.title]: e.target.value
  })
}


signUp() {
  const {email, password} = this.state
  auth.createUserWithEmailAndPassword(email, password)
  .then((response) => { console.log(response);
    this.props.loginSuccess(Object.assign({}, {id: response.uid}, {email: response.email}))
  })
  .catch(err => console.log('ERR', err))
}


  render() {

    if(this.props.loginUser.email) {
      return <Redirect to={'/Search'} />
    }

    return(
      <div>
      <section className='login-wrapper'>
      <h1>Sign up</h1>

          <input
            className='user-input' title='email' type="email" value={this.state.email}
            placeholder="email"
            onChange={(e) => this.grabValue(e)} />
          <input
            className='user-input' title='password' type="password"
            placeholder="password"
            onChange={(e) => this.grabValue(e)} />
          <button className='form-btn' onClick={(e) => {
            this.signUp()
            this.props.changeRoute('./')
            }} >Sign Up</button>
            </section>

      </div>
    )
  }
}

export default LoginContainer(Signup);

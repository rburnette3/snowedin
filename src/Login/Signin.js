import React, { Component } from 'react';
import './Signin.css';
import firebase, { auth, provider, signOut } from '../firebase.js';
import { Route, NavLink, Link, Switch, Redirect } from 'react-router-dom';
import LoginContainer from '../Containers/LoginContainer';


class Signin extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      isSignedIn: false,
      user: null
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
    .then((result) => { console.log(result, 'USER', result.user);
      this.props.loginSuccess(Object.assign({}, {id: result.uid}, {email: result.email}, {name: result.displayName}))
    })
    .catch(err => console.log(this.store))
}

  render() {

    if(this.props.loginUser.email) {
      return <Redirect to={'/Search'} />
}

    return(
      <div>
        <section className='login-wrapper'>
          <h1>Sign In</h1>
          <input
            className='user-input' title='name' type="text" value={this.state.name}
            placeholder="email"
            onChange={(e) => this.grabValue(e)} />
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



        </section>
      </div>
    )
  }
}

export default LoginContainer(Signin);

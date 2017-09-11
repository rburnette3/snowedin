import React, { Component } from 'react';
import './Login.css';
import firebase, { auth, provider } from '../firebase.js';
import LoginContainer from '../Containers/LoginContainer';



class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      user: ''
    }


    this.logout = this.logout.bind(this);
    this.signUp = this.signUp.bind(this);
    this.signIn = this.signIn.bind(this);
  }


  grabValue(e) {
    this.setState({
      [e.target.title]: e.target.value
  })
}

logout() {
  auth.signOut()
    .then(() => {
      this.setState({
        email: '',
        password: '',
        user:null,
        isLoggedIn: false
      })
      console.log(this.state);
    })
}



signUp() {
  const {email, password} = this.state
  auth.createUserWithEmailAndPassword(email, password)
  .then((response) => {console.log('res', response)
  })
  .catch(err => console.log('ERR', err))
}

signIn() {
  const {email, password} = this.state
  auth.signInWithEmailAndPassword(email, password)
  .then((response) => {console.log('RES', response)
  })
  .catch(err => console.log('ERR', err))
}


  render() {
    const resortKey = {key: '54883438'};

    return(
      <div>
        <button onClick={() => { this.props.fetchData(resortKey)}}>Make Da Call</button>

        <input
            title='email' type="email" value={this.state.email}
            placeholder="email"
            onChange={(e) => this.grabValue(e)} />
          <input
            title='password' type="password"
            placeholder="password"
            onChange={(e) => this.grabValue(e)} />
        {this.state.user ?
          <button onClick={this.logout} className='login-btn'>Log Out</button>
          :
          <button onClick={this.signIn} className='login-btn'>Log In</button>
        }
      <button className='sign-up' onClick={this.signUp} >Sign Up</button>

      </div>
    )
  }
}

export default LoginContainer(Login);

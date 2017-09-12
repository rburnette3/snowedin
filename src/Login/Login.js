import React, { Component } from 'react';
import './Login.css';
import firebase, { auth, provider } from '../firebase.js';
import LoginContainer from '../Containers/LoginContainer';



class Login extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
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
  .then((response) => {
    this.props.createSuccess(Object.assign({}, {id: response.uid}, {email: response.email}, {username: response.displayName} ))
  })
  .catch(err => console.log('ERR', err))
}

signIn() {
  const {email, password} = this.state
  console.log(this.props)
  auth.signInWithEmailAndPassword(email, password)
  .then((response) => {
    this.props.loginSuccess(Object.assign({}, {id: response.uid}, {email: response.email}, {username: response.displayName} ))
  })
  .catch(err => console.log(this.store))
}


  render() {
    const resortKey = {key: '54883438'};

    return(
      <div>
        <button onClick={() => { this.props.fetchData(resortKey)}}>Make Da Call</button>

        <input
            className='user-input' title='username' type="username" value={this.state.username}
            placeholder="username"
            onChange={(e) => this.grabValue(e)} />
        <input
            className='user-input' title='email' type="email" value={this.state.email}
            placeholder="email"
            onChange={(e) => this.grabValue(e)} />
          <input
            className='user-input' title='password' type="password"
            placeholder="password"
            onChange={(e) => this.grabValue(e)} />
        {this.state.user ?
          <button className='form-btn' onClick={() => {this.logout()}} >Log Out</button>
          :
          <button className='form-btn' onClick={() => {this.signIn()}} >Log In</button>
        }
      <button className='form-btn' onClick={() => {this.signUp()}} >Sign Up</button>

      </div>
    )
  }
}

export default LoginContainer(Login);

// {
//   "uid": "8OQ3X7HjTNXHGOqzYW2znwao9E02",
//   "displayName": null,
//   "photoURL": null,
//   "email": "rb3@this.com",
//   "emailVerified": false,
//   "phoneNumber": null,
//   "isAnonymous": false,
//   "providerData": [
//     {
//       "uid": "rb3@this.com",
//       "displayName": null,
//       "photoURL": null,
//       "email": "rb3@this.com",
//       "phoneNumber": null,
//       "providerId": "password"
//     }
//   ],
//   "apiKey": "AIzaSyDrqYCk_xgTTvXVQzl8n_9UTTA66o2ZMgo",
//   "appName": "[DEFAULT]",
//   "authDomain": "snowedin-91ce7.firebaseapp.com",
//   "stsTokenManager": {
//     "apiKey": "AIzaSyDrqYCk_xgTTvXVQzl8n_9UTTA66o2ZMgo",
//     "refreshToken": "APRrRCKqoNZXAlqFMgZocN-kmfaN6JIbS-_Ji_nXL1T8fqLI18NYZP4UX1H9Pf9QfOBLAxTJ5TRmbnTnb0dMPqpIvnbkdq9XTelkrdsXPHIz5PoUgb4mACZB1jtO8yD6gHIOuwvY6YPD9i27u2eDV2rZ5B55sHeBtxzdr5fWzpj18LGcONYWguECI86HlHatbHjxicK1hCpW7aq4lwOcU8Bw5Ko2UEMRGA",
//     "accessToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImMzZDY0Y2YzMDQwMjM3ZDc2NzFmMTE1MjIxNmM5Yzk0NmMyOTBiZGEifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vc25vd2VkaW4tOTFjZTciLCJhdWQiOiJzbm93ZWRpbi05MWNlNyIsImF1dGhfdGltZSI6MTUwNTE3MzQ5NCwidXNlcl9pZCI6IjhPUTNYN0hqVE5YSEdPcXpZVzJ6bndhbzlFMDIiLCJzdWIiOiI4T1EzWDdIalROWEhHT3F6WVcyem53YW85RTAyIiwiaWF0IjoxNTA1MTczNDk0LCJleHAiOjE1MDUxNzcwOTQsImVtYWlsIjoicmIzQHRoaXMuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInJiM0B0aGlzLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.HnBI8P8LkQzM2cGygaHCd-8RSu3PQooLiPu2KTEX4v3ShUnROVmJbiJBv6mDs1tb8MiG64uRiyiQHFYWYxFAYjDqgQw6AMxH24Z3Xklviet75swxlKgdSDu2qQb6z8_TJiPmIsTAtYu7aKVbOkRIlW3yTIftVIfMSreHK3tyDyr3-trREgbh15eSaJVJq3b-EIwwFaXrKny8KTGVjFPAfjVSdZKUyTGDqA8BBefKock_Y2Jt5rPNPMaHORRKp-98HIzJ4Wd2QpBPusG7sHH7fnY0_PB4BIRy97B8zdoBGAnBGh6jz5E7n_3ZqrTEntMYZlOPS_YP79n1BD0szZD-Vg",
//     "expirationTime": 1505177094750
//   },
//   "redirectEventId": null
// }

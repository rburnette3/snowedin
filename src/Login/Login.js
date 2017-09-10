import React, { Component } from 'react';
import './Login.css';
import firebase, { auth, provider } from '../firebase.js';



export default class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      user: null,
    }
    this.getValue = this.getValue.bind(this);


  }

  getValue(e) {
    this.setState({
      [e.target.title]: e.target.value
    })
    console.log(this.state)
  }

  handleSubmit(e) {
    e.preventDefault();
    const usersRef = firebase.database().ref('users');
    const user = {
      email: this.state.email,
      password: this.state.password
    }
    usersRef.push(user);
    this.setState({
      email: '',
      password: ''
    });
  }

  search(e) {
    this.setState({
      [e.target.search]: e.target.value
    })
  }

  render() {
    return(
      <div>

      <div className='login-wrapper'>
      {this.state.user ?
        <button onClick={this.logout}>Log Out</button>
        :
        <button onClick={this.login}>Log In</button>}

      </div>


        <form>

          <input className='user-input'
            title='email' type="text" value={ this.state.email }
            placeholder='Email'
            onChange={(e) => this.getValue(e)} />
          <input className='user-input'
            title='password' type="text" value={ this.state.password }
            placeholder= 'Password'
            onChange={(e) => this.getValue(e)} />

          <button className='form-btn'
            onClick={(e) => {
              this.handleSubmit(e)}}>
              Log In
          </button>

          <button className='form-btn'
            onClick={(e) => {
              e.preventDefault();
              this.props.addUser(this.state)}}> Create New User
          </button>
        </form>
      </div>
    )
  }


}




  // componentDidMount(){
  //   fetch('http://api.weatherunlocked.com/api/resortforecast/54883438?app_id=d637cec6&app_key=ecc28c74339618877a38b8527cea5290')
  //     .then(response => response.json());
  //     .then(parsedResponse => {
  //       this.setState({snowdata: object}));
  // }

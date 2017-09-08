import React, { Component } from 'react';


export default class Login extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      password: ''
    }
    this.getValue = this.getValue.bind(this)
  }

  getValue(e) {
    this.setState({
      [e.target.title]: e.target.value
    })
  }

  render() {
    return(
      <div>
        <form>
          <input
            title='name' type='text' value={ this.state.name }
            placeholder='Name'
            onChange={(e) => this.getValue(e)} />
          <input
            title='email' type="text" value={ this.state.email }
            placeholder='Email'
            onChange={(e) => this.getValue(e)} />
          <input
            title='password' type="text" value={ this.state.password }
            placeholder= 'Password'
            onChange={(e) => this.getvalue(e)} />
          <button className='form-btn'
            onClick={(e) => {
              e.preventDefault();
              this.props.submitLogin(this.state)}}> Log In
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

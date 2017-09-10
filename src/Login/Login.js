import React, { Component } from 'react';
import './Login.css';
import Firebase from '../firebase/firebase';



export default class Login extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      password: '',
      search: '',
      snowdata: {}
    }
    this.getValue = this.getValue.bind(this)
  }

  // componentDidMount(){
  //   fetch(`http://api.weatherunlocked.com/api/resortforecast/{resort_id}?app_id={d637cec6}&app_key={ecc28c74339618877a38b8527cea5290}`)
  //     .then(response => response.json());
  //     .then(parsedResponse => {
  //       this.setState({snowdata: object}));
  // }


  // .then(parsedResult => dataClean(parsedResult))
  //       .then(result => {
  //         this.saveToStorage(result.currentData.location);
  //         this.setState({



  getValue(e) {
    this.setState({
      [e.target.title]: e.target.value
    })
    console.log(this.state)

  }

  search(e) {
    this.setState({
      [e.target.search]: e.target.value
    })
  }

  render() {
    return(
      <div>
        <input title='destination' type="text" value={ this.state.search }
        placeholder='Search'
        onChange={(e) => this.getValue(e)}/>
        <button onClick={(e) => {e.preventDefault();
        this.props.search(this.state)}}>go</button>
        <form>
          <input className='user-input'
            title='name' type='text' value={ this.state.name }
            placeholder='Name'
            onChange={(e) => this.getValue(e)} />
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

import React, { Component } from 'react';
import './MessageBoard.css';
import { Route, NavLink, Link, Switch, Redirect } from 'react-router-dom';
import firebase, { auth, provider } from '../firebase.js';
import LoginContainer from '../Containers/LoginContainer';

class MessageBoard extends Component {
  constructor(props, context){
    super(props, context)
    this.state = {
      newMessage: '',
      messages: []
    }

    this.updateMessage=this.updateMessage.bind(this)
    this.sendMessage=this.sendMessage.bind(this)
  }

  componentDidMount(){
    console.log("MOUNTED")
    firebase.database().ref('messages/').on('value', (snapshot) => {

      const currentMessages = snapshot.val()

      if (currentMessages != null){
        this.setState
      }
    })
  }

  updateMessage(e) {
    console.log('updateMessage:' +e.target.value)
    this.setState({
      newMessage: e.target.value
    })
  }

  sendMessage(e) {
    console.log('sendMessage:' +this.state.message)
    const nextMessage = {
      id: this.state.messages.length,
      text: this.state.newMessage
    }

    firebase.database().ref('messages/' +nextMessage.id).set(nextMessage)

    // var list = Object.assign([], this.state.messages)
    // list.push(nextMessage)
    // this.setState({
    //   messages: list
    // })
  }

render() {
  const currentMessage = this.state.messages.map((message, i) =>{
    return (
      <li key = {message.id}>{message.text}</li>
    )
  })

  return (
    <div>
      <h1>Message Board</h1>
        <ol>
          {currentMessage}
        </ol>
          <input onChange={this.updateMessage} type='text' placeholder='Enter Message'/>
          <button onClick={this.sendMessage}>Send</button>
    </div>
    )
  }
}

export default LoginContainer(MessageBoard)

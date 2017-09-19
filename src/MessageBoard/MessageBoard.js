import React, { Component } from 'react';
import './MessageBoard.css';
import { Route, NavLink, Link, Switch, Redirect } from 'react-router-dom';
import firebase, { auth, provider } from '../firebase.js';
import LoginContainer from '../Containers/LoginContainer';




class MessageBoard extends Component {
  constructor(props, context){
    super(props, context)
    this.state = {
      newMessage:'',
      messages: []
    }

    this.updateMessage=this.updateMessage.bind(this)
    this.sendMessage=this.sendMessage.bind(this)
  }

  componentDidMount(){
    const messageRef = firebase.database().ref('messages/')
    messageRef.on('value', (snapshot) => {
      const currentMessages = snapshot.val()
      const keys = Object.keys(currentMessages)
      const allMessages = [];

      keys.forEach((message, i) => {
        allMessages[i] = currentMessages[keys[i]]
    })

    this.setState(
      {messages: allMessages}
    )

    this.props.savedMessages(allMessages)
  })
}


  updateMessage(e) {
    this.setState({
      newMessage: e.target.value
    })
  }

  sendMessage(e) {
    const nextMessage = {
      resortKey: '54883438',
      id: Date.now(),
      user: 'temp user',
      text: this.state.newMessage
    }
    this.props.sendMessage(nextMessage)
    firebase.database().ref('messages/' +nextMessage.id).set(nextMessage)
    var list = [...this.state.messages, nextMessage]
    this.setState({
      messages: list
    })
  }

  render() {
    const currentMessage = this.state.messages.map((message, i) =>{
      if(message.resortKey === '54883438' )
      return (
        <li key = {message.id}>{message.text}</li>
      )
    })
///
    return (
      <div className='messageboard-body'>
        <section className='messageboard-wrapper'>
          <h1 className='messageboard-title'>Message Board</h1>
        </section>
            <ol className='message-display'>
              {currentMessage}

            </ol>
              <section className='message-input-wrapper'>
                <input className='message-input' onChange={this.updateMessage} type='text' placeholder='Enter Message'/>
                <button className='message-btn' onClick={(e) => {
                  this.sendMessage()
                }}>Send</button>
        </section>
    </div>
    )
  }
}

export default LoginContainer(MessageBoard);

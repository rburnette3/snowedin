import React from 'react',


const Message = ({props}) => {
  return (
    <div className='message-wrapper'>
      <p className='message-date'> {props.id} </p>
      <p className='message-text'>{} </p>
      <p className='message-user'> </p>
    </div>
  )
}

export default LoginContainer(Message);

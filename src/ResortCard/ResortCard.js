import React from 'react';
import './ResortCard.css';
import LoginContainer from '../Containers/LoginContainer';


const ResortCard = ({name, country}) => {

  return (

    <div className='card-display'>
      <p className='card-text'> { name } </p>
    </div>
  )
}

export default LoginContainer(ResortCard);

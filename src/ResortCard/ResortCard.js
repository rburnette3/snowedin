import React from 'react';
import './ResortCard.css';
import LoginContainer from '../Containers/LoginContainer';
import { Route, NavLink, Link, Switch, Redirect } from 'react-router-dom';


const ResortCard = ({props}) => {
  console.log('CARD PROPS', props )



 return (

   <div className='card-display'>
      <p className='card-text'> { props.resortData.name } </p>
      <NavLink to='/MessageBoard' className='nav'> Message </NavLink>

    </div>

  )
}

export default LoginContainer(ResortCard);

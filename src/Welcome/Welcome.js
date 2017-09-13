import React from 'react';
import './Welcome.css';
import { Route, NavLink, Link, Switch, Redirect } from 'react-router-dom';




const Welcome = () => {

  return (
    <div>
      <NavLink to='/signin' className='nav'> Sign In </NavLink>
      <NavLink to='/signup' className='nav'> Sign Up </NavLink>
    </div>

  )
}

export default Welcome;

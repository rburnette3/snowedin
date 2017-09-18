import React from 'react';
import './Welcome.css';
import { Route, NavLink, Link, Switch, Redirect } from 'react-router-dom';

const Welcome = () => {

  return (
    <div>
      <section className='login-wrapper'>
        <h1 className='app-title'>Snowedin</h1>
          <section className='link-wrapper'>
            <NavLink to='/signin' className='nav'> Sign In </NavLink>
          </section>
          <section className='link-wrapper'>
            <NavLink to='/signup' className='nav'> Sign Up </NavLink>
          </section>
      </section>
    </div>
  )
}

export default Welcome;

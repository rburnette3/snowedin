import React, { Component } from 'react';
import './App.css';
import Login from '../Login/Login';
import Welcome from '../Welcome/Welcome';
import Signup from '../Login/Signup';
import Signin from '../Login/Signin';
import Search from '../Search/Search';
import MessageBoard from '../MessageBoard/MessageBoard';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';
import { withRouter } from 'react-router-dom';


class App extends Component {

  render() {
    return (
      <div className="App">
          <Route exact path='/signin' component={Signin} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/search' component={Search} />
          <Route exact path='/MessageBoard' component={MessageBoard} />
          <Route exact path='/' component={Welcome} />
        </div>

      );
    }
  }

  export default App;

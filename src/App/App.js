import React, { Component } from 'react';
import './App.css';
import Login from '../Login/Login';
import Welcome from '../Welcome/Welcome';
import Signup from '../Login/Signup';
import Signin from '../Login/Signin';
import Search from '../Search/Search';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';
import { withRouter } from 'react-router-dom';


class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Snowedin</h1>
        </div>
        <Route exact path='/Signin'
            render={() => <Signin />}
            />
        <Route exact path='/Signup'
            render={() => <Signup />}
            />
        <Route exact path='/Search'
              render={() => <Search />}
            />
        <Route exact path='/'
            render={() => <Welcome />}
            />
      </div>

      );
    }
  }

  export default App;

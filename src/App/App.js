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
        <Route exact path='/signin'
            render={() => <Signin />}
            />
        <Route exact path='/signin' component={Signin} />
        <Route exact path='/signup'
            render={() => <Signup />}
            />
        // <Route exact path='/' render={() => {
        //   if (user) {
        //     props={<button>Sign Out</button>}
        //   } else {
        //     props= {
        //       <button>Sign In</button>
        //     }
        //
        //     return <Header props={props} />
        //   }
        // }} />
        <Route exact path='/search'
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

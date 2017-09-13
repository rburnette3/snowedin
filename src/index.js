import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import configureStore from './Store/ConfigureStore'
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'
import { ConnectedRouter, routerMiddleware, push } from 'react-router-redux'



const devTools = window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()

const history = createHistory()

const middleware = routerMiddleware(history)

const store = configureStore(devTools)


ReactDOM.render(

  <Provider store ={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

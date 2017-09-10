import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import rootReducer from './Reducers/index';



const devTools = window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()

// const store = configureStore(devTools)
//   rootReducer,
//   devTools






ReactDOM.render(
  // <Provider store ={store}>
  <App />,
  // </Provider>,
  document.getElementById('root')
);

import { combineReducers } from 'redux';
import { fetchedData } from './Reducers';
import { loginUser } from './Reducers';
import { createUser } from './Reducers';

const rootReducer = combineReducers ({
  fetchedData,
  loginUser,
  createUser
})

export default rootReducer

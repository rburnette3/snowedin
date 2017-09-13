import { combineReducers } from 'redux';
import { fetchedData } from './Reducers';
import { loginUser } from './Reducers';



const rootReducer = combineReducers ({
  fetchedData,
  loginUser,
  
})

export default rootReducer

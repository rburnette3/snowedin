import { combineReducers } from 'redux';
import { fetchedData } from './Reducers';
import { loginUser } from './Reducers';
import { messages } from './Reducers';



const rootReducer = combineReducers ({
  fetchedData,
  loginUser,
  messages

})

export default rootReducer

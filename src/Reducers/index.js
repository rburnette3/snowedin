import { combineReducers } from 'redux';
import { fetchData, loginUser, messages, changeLocation } from './Reducers';
// import { loginUser } from './Reducers';
// import { messages } from './Reducers';



const rootReducer = combineReducers ({
  fetchData,
  loginUser,
  messages

})

export default rootReducer

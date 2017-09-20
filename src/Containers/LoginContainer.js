import { connect } from 'react-redux';
import { handleFetch, loginSuccess, sendMessage,  savedMessages, changeLocation } from '../Actions';
import { push } from 'react-router-redux';


const mapStateToProps = (store) => {
  return {
    resortData: store.fetchData,
    loginUser: store.loginUser,
    messages: store.messages,
    changeLocation: store.changeLocation,
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    handleFetch:(parsedResponse) => dispatch(handleFetch(parsedResponse)),
    loginSuccess: (user) => dispatch(loginSuccess(user)),
    changeRoute:(url) => dispatch(push(url)),
    sendMessage:(message) => (dispatch(sendMessage(message))),
    savedMessages:(message)=> (dispatch(savedMessages(message))),
    changeLocation:(location)=>
    (dispatch(changeLocation(location)))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)

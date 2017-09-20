import { connect } from 'react-redux';
import { fetchData, loginSuccess, sendMessage,  savedMessages, changeLocation } from '../Actions';
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
    fetchData:(location) => dispatch(fetchData(location)),
    loginSuccess: (user) => dispatch(loginSuccess(user)),
    changeRoute:(url) => dispatch(push(url)),
    sendMessage:(message) => (dispatch(sendMessage(message))),
    savedMessages:(message)=> (dispatch(savedMessages(message))),
    changeLocation:(location)=>
    (dispatch(changeLocation(location)))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)

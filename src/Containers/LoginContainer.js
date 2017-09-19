import { connect } from 'react-redux';
import { fetchData, loginSuccess, sendMessage, savedMessages } from '../Actions';
import { push } from 'react-router-redux';



const mapStateToProps = (store) => {
  return {
    resortData: store.fetchedData,
    loginUser: store.loginUser,
    messages: store.messages
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (resortKey) => dispatch(fetchData(resortKey)),
    loginSuccess: (user) => dispatch(loginSuccess(user)),
    changeRoute:(url) => dispatch(push(url)),
    sendMessage:(message) => (dispatch(sendMessage(message))),
    savedMessages:(message)=> (dispatch(savedMessages(message)))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)

import { connect } from 'react-redux';
import { fetchData, loginSuccess } from '../Actions';
import Signin from '../Login/Signin';
import { push } from 'react-router-redux';


const mapStateToProps = (store) => {
  return {
    resortData: store.fetchedData,
    loginUser: store.loginUser
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (resortKey) => dispatch(fetchData(resortKey)),
    loginSuccess: (user) => dispatch(loginSuccess(user)),
    changeRoute:(url) => dispatch(push(url))

  }
}


export default connect(mapStateToProps, mapDispatchToProps)

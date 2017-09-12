import { connect } from 'react-redux';
import { fetchData, loginSuccess, createSuccess } from '../Actions';


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
    createSuccess: (user) => dispatch(createSuccess(user)),

  }
}


export default connect (mapStateToProps, mapDispatchToProps)

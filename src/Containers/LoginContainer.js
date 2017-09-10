import Login from '../Login/Login';
import { connect } from 'react-redux';
import { fetchData } from '../Actions';


const mapDispatchToProps = (dispatch) => {
  return {
  fetchData: (resortKey) => dispatch(fetchData(resortKey))
}
}

export default connect (null, mapDispatchToProps)(Login)

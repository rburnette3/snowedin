import { connect } from 'react-redux';
import { fetchData } from '../Actions';


const mapStateToProps = (store) => {
  return {
    resortData: store.fetchedData,
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (resortKey) => dispatch(fetchData(resortKey))
  }
}


export default connect (mapStateToProps, mapDispatchToProps)

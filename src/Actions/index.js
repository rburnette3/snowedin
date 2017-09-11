export const fetchData = (resortKey) => {

  return dispatch => {
    fetch(`http://api.weatherunlocked.com/api/resortforecast/${resortKey.key}?app_id=d637cec6&app_key=ecc28c74339618877a38b8527cea5290`)
    .then(response => {
      if(response.status!==200){
        console.log('fail');
      }
      return response;
    })
    .then(response => response.json())
    .then(parsedResponse => dispatch(fetchSuccess(parsedResponse)))
    .catch(error => console.log('ERROR', error))
  }
}

export const fetchSuccess = (parsedResponse) =>{
  return {
    type: 'FETCH_SUCCESS',
    data: parsedResponse
  }
}

export const signOut = () => {
  return {
    type: 'SIGN_OUT'
  }
}

/////login/////

// export const logIn = (user) => {
//   return dispatch => {
//     login() {
//       auth.signInWithPopup(provider)
//         .then((result) => {
//           const user = result.user;
//           console.log(result);
//           this.setState({
//             user,
//             isLoggedIn: true
//           });
//           console.log(this.state);
//         });
//     }
//   }
// }
//
// export const loginSuccess = (user) => {
//   return {
//     type: 'LOGIN_SUCCESS',
//     user
//   }
// }

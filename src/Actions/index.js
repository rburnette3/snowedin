// export const fetchData = (resortKey) => {
//
//   return dispatch => {
//     fetch('http://localhost:3001/api/v1/resorts/CA')
//     .then(response => {
//       if(response.status!==200){
//         console.log('fail');
//       }
//       return response;
//     })
//     .then(response => response.json())
//     // .then(response => Object.assign({}, {country: response.state, name: response.name}))
//     .then(response => console.log(response))
//     .then(parsedResponse => dispatch(fetchSuccess(parsedResponse)))
//     .then(response => console.log('RESPONSE', response))
//     .catch(error => console.log('ERROR FOOL', error))
//   }
// }

export const fetchData = (parsedResponse) => {
  return {
    type: 'FETCH_DATA',
    data: parsedResponse
  }
}

export const signOut = () => {
  return {
    type: 'SIGN_OUT'
  }
}

export const loginSuccess = (user) => {
  return {
    type: 'LOGIN_SUCCESS',
    user
  }
}

export const createSuccess = (user) => {
  return {
    type: 'CREATE_USER_SUCCESS',
    user
  }
}

export const sendMessage = (message) => {
  return {
    type: 'SEND_MESSAGE',
    message
  }
}

export const savedMessages = (savedMessages) => {
  return {
    type: 'SAVED_MESSAGES',
    savedMessages
  }
}

export const changeLocation = (changedLocation) => {
  return {
    type: 'CHANGE_LOCATION',
    changedLocation

  }
}

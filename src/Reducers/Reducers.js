export const fetchData = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return action.data

      default:
      return state
  }
}

export const loginUser = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return action.user

      default:
      return state
  }
}

export const messages = (state = [], action) => {
  switch (action.type) {
    case 'SEND_MESSAGE':
    return [...state, action.message]
    case 'SAVED_MESSAGES':
    return action.savedMessages

    default:
    return state
  }
}

export const changeLocation = (state = {}, action) => {
switch (action.type) {
  case 'CHANGE_LOCATION':
    return action.location

    default:
    return state
  }
}

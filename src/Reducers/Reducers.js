export const fetchedData = (state = {}, action) => {
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

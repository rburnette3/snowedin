export const fetchedData = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return action.data

    default:
    return state
  }
}

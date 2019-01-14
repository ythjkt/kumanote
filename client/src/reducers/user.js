const user = (state = {}, action) => {
  switch (action.type) {
    case 'REGISTER_USER':
      return {
        ...state,
        user: action.payload
      }
    default:
      return state
  }
}

export default user

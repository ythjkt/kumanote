import isEmpty from '../utils/isEmpty'

const user = (state = {}, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        ...action.payload
      }
    default:
      return state
  }
}

export default user

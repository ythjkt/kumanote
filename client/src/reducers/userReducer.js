import isEmpty from '../utils/isEmpty'

import { SET_CURRENT_USER } from '../const/actionTypes'

const initialState = {
  isAuthenticated: false,
  user: {}
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      }
    default:
      return state
  }
}

export default user

import { errorActionTypes } from '../const/actionTypes'

export default function(state = {}, action) {
  switch (action.type) {
    case errorActionTypes.GET_ERRORS:
      return action.payload
    default:
      return state
  }
}

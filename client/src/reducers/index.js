import { combineReducers } from 'redux'

import user from './userReducer'
import note from './noteReducer'
import errors from './errorReducer'

export default combineReducers({
  user,
  note,
  errors
})

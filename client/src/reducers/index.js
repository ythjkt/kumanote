import { combineReducers } from 'redux'

import user from './userReducer'
import note from './note'
import notes from './notes'
import errors from './errorReducer'

export default combineReducers({
  user,
  note,
  notes,
  errors
})

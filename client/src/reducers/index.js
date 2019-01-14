import { combineReducers } from 'redux'

import user from './user'
import note from './note'
import notes from './notes'
import errors from './errors'

export default combineReducers({
  user,
  note,
  notes,
  errors
})

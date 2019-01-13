import { combineReducers } from 'redux'
import note from './note'
import notes from './notes'

export default combineReducers({
  note,
  notes
})

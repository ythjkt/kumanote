import arrayToObject from '../utils/arrayToObject'

import {
  ADD_NOTE,
  EDIT_NOTE,
  GET_NOTES,
  DELETE_NOTE,
  SELECT_NOTE,
  NOTE_LOADING
} from '../constants/actionTypes'

const initialState = {
  selectedNoteId: null,
  notes: null,
  loading: false
}

const note = (state = initialState, action) => {
  switch (action.type) {
    case GET_NOTES:
      // Return an object with id as key
      let notes = arrayToObject(action.payload, 'id')
      return {
        ...state,
        notes,
        loading: false
      }
    case NOTE_LOADING:
      return {
        ...state,
        loading: true
      }
    case SELECT_NOTE:
      return {
        ...state,
        selectedNoteId: action.payload.id
      }
    case ADD_NOTE:
      return {
        loading: false,
        selectedNoteId: action.payload.id,
        notes: { [action.payload.id]: action.payload, ...state.notes }
      }
    default:
      return state
  }
}

export default note

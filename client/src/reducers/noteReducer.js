import arrayToObject from '../utils/arrayToObject'

import {
  ADD_NOTE,
  EDIT_NOTE,
  GET_NOTES,
  GET_NOTE,
  DELETE_NOTE,
  SELECT_NOTE,
  NOTE_LOADING
} from '../constants/actionTypes'

const initialState = {
  selectedNoteId: null,
  notes: {},
  loading: false
}

const note = (state = initialState, action) => {
  switch (action.type) {
    case GET_NOTES:
      // Return an object with id as key
      var notes = arrayToObject(action.payload, 'id')
      return {
        ...state,
        notes,
        loading: false
      }
    case GET_NOTE:
      console.log(action.type)
      console.log(action.payload)
      var notes = { ...state.notes, [action.payload.id]: action.payload }
      console.log('notes: ')
      return {
        ...state,
        notes,
        selectedNoteId: action.payload.id,
        loading: false
      }
    case NOTE_LOADING:
      return {
        ...state,
        loading: true
      }
    case SELECT_NOTE:
      console.log('Select Note reducer ')
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
    case EDIT_NOTE:
      return {
        ...state,
        notes: {
          ...state.notes,
          [action.payload.id]: {
            id: action.payload.id,
            title: action.payload.title,
            content: action.payload.content
          }
        }
      }
    case DELETE_NOTE:
      let newState = { ...state, selectedNoteId: null }
      delete newState.notes[action.payload.id]
      return newState
    default:
      return state
  }
}

export default note

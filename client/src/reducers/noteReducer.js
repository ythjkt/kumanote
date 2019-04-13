import arrayToObject from '../utils/arrayToObject'

import { noteActionTypes } from '../const/actionTypes'

const initialState = {
  selectedNoteId: null,
  notes: {},
  loading: false,
  saving: false
}

const note = (state = initialState, action) => {
  switch (action.type) {
    case noteActionTypes.GET_NOTES:
      // Return an object with id as key
      var notes = action.payload ? arrayToObject(action.payload, 'id') : {}
      return {
        ...state,
        notes,
        loading: false
      }
    case noteActionTypes.GET_NOTE:
      var notes = { ...state.notes, [action.payload.id]: action.payload }
      return {
        ...state,
        notes,
        selectedNoteId: action.payload.id,
        loading: false
      }
    case noteActionTypes.NOTE_LOADING:
      return {
        ...state,
        loading: true
      }
    case noteActionTypes.NOTE_SAVING:
      return {
        ...state,
        saving: true
      }
    case noteActionTypes.SELECT_NOTE:
      return {
        ...state,
        selectedNoteId: action.payload.id
      }
    case noteActionTypes.ADD_NOTE:
      return {
        loading: false,
        selectedNoteId: action.payload.id,
        notes: {
          [action.payload.id]: action.payload,
          ...state.notes
        }
      }
    case noteActionTypes.EDIT_NOTE:
      return {
        ...state,
        saving: false,
        notes: {
          ...state.notes,
          [action.payload.id]: {
            id: action.payload.id,
            title: action.payload.title,
            content: action.payload.content,
            excerpt: action.payload.excerpt,
            updated: action.payload.updated
          }
        }
      }
    case noteActionTypes.DELETE_NOTE:
      let newState = { ...state, selectedNoteId: null }
      delete newState.notes[action.payload.id]
      return newState
    default:
      return state
  }
}

export default note
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
  selectedNote: null,
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
    case ADD_NOTE:
      return {
        ...state,
        [action.payload.id]: {
          id: action.payload.id,
          title: 'untitled',
          content: ''
        }
      }
    case EDIT_NOTE:
      console.log(action)
      return {
        ...state,
        [action.payload.id]: {
          id: action.payload.id,
          title: action.payload.title,
          content: action.payload.content
        }
      }

    case DELETE_NOTE:
      let newState = { ...state }
      delete newState[action.payload.id]
      return newState
    default:
      return state
  }
}

export default note

import axios from 'axios'

import {
  ADD_NOTE,
  EDIT_NOTE,
  GET_NOTES,
  DELETE_NOTE,
  SELECT_NOTE,
  NOTE_LOADING,
  GET_ERRORS
} from '../constants/actionTypes'

// Gets current user's notes
export const getNotes = () => dispatch => {
  console.log('getNOtes being called')
  dispatch(setNoteLoading())
  axios
    .get('/api/notes')
    .then(res => {
      console.log('Notes recieved')
      return dispatch({
        type: GET_NOTES,
        payload: res.data
      })
    })
    .catch(err => {
      console.log('error from get_ntes')
      console.log(err)
      return dispatch({
        type: 'GET_NOTES',
        payload: null
      })
    })
}

export const addNote = () => dispatch => {
  console.log('recieved')
  axios
    .post('/api/notes', { title: 'untitled', content: '' })
    .then(res => {
      console.log('successful save')
      console.log(res)
      dispatch(selectNote(res.data.id))
      return dispatch({
        type: ADD_NOTE,
        payload: res.data
      })
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    )
}

export const selectNote = id => {
  return {
    type: SELECT_NOTE,
    payload: {
      id
    }
  }
}

// Sets Note loading to true
export const setNoteLoading = () => ({
  type: NOTE_LOADING
})

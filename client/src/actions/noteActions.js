import axios from 'axios'

import {
  ADD_NOTE,
  EDIT_NOTE,
  GET_NOTES,
  DELETE_NOTE,
  SELECT_NOTE,
  NOTE_LOADING
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

// Sets Note loading to true
export const setNoteLoading = () => ({
  type: NOTE_LOADING
})

import axios from 'axios'

import { noteActionTypes, errorActionTypes } from '../const/actionTypes'

// Gets current user's notes
export const getNotes = () => dispatch => {
  dispatch(setNoteLoading())
  axios
    .get('/api/notes')
    .then(res => {
      return dispatch({
        type: noteActionTypes.GET_NOTES,
        payload: res.data
      })
    })
    .catch(err => {
      return dispatch({
        type: noteActionTypes.GET_NOTES,
        payload: null
      })
    })
}
// Gets a single note
export const getNote = id => dispatch => {
  axios
    .get(`/api/notes/${id}`)
    .then(res => {
      return dispatch({
        type: noteActionTypes.GET_NOTE,
        payload: res.data
      })
    })
    .catch(err => {
      // TODO dispatch NO_NOTE?
      // return dispatch({
      //   type: GET_NOTE,
      //   payload: null
      // })
    })
}

export const addNote = history => dispatch => {
  axios
    .post('/api/notes', {
      title: '',
      excerpt: '',
      content: '',
      created: new Date().getTime(),
      updated: new Date().getTime()
    })
    .then(res => {
      history.push(`/app/${res.data.id}`)
      return dispatch({
        type: noteActionTypes.ADD_NOTE,
        payload: res.data
      })
    })
    .catch(err =>
      dispatch({
        type: errorActionTypes.GET_ERRORS,
        payload: err.data
      })
    )
}

export const editNote = (id, title, excerpt, content) => dispatch => {
  dispatch(setNoteSaving())
  axios
    .post('/api/notes', {
      id,
      title,
      excerpt,
      content,
      updated: new Date().getTime()
    })
    .then(res => {
      return dispatch({
        type: noteActionTypes.EDIT_NOTE,
        payload: res.data
      })
    })
    .catch(err =>
      dispatch({
        type: errorActionTypes.GET_ERRORS,
        payload: err.data
      })
    )
}

export const selectNote = id => {
  return {
    type: noteActionTypes.SELECT_NOTE,
    payload: {
      id
    }
  }
}

export const deleteNote = id => dispatch => {
  axios
    .delete(`/api/notes/${id}`)
    .then(res => {
      return dispatch({
        type: noteActionTypes.DELETE_NOTE,
        payload: res.data
      })
    })
    .catch(err =>
      dispatch({
        type: errorActionTypes.GET_ERRORS,
        payload: err.data
      })
    )
}

// Sets Note loading to true
export const setNoteLoading = () => ({
  type: noteActionTypes.NOTE_LOADING
})

// Sets Note saving to true
export const setNoteSaving = () => ({
  type: noteActionTypes.NOTE_SAVING
})
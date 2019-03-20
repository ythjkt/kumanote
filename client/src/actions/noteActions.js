import axios from 'axios'

import {
  ADD_NOTE,
  EDIT_NOTE,
  GET_NOTES,
  GET_NOTE,
  DELETE_NOTE,
  SELECT_NOTE,
  NOTE_LOADING,
  GET_ERRORS,
  NOTE_SAVING
} from '../const/actionTypes'

// Gets current user's notes
export const getNotes = () => dispatch => {
  dispatch(setNoteLoading())
  axios
    .get('/api/notes')
    .then(res => {
      return dispatch({
        type: GET_NOTES,
        payload: res.data
      })
    })
    .catch(err => {
      return dispatch({
        type: GET_NOTES,
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
        type: GET_NOTE,
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
      title: 'untitled',
      excerpt: '',
      content: '',
      created: new Date().getTime(),
      updated: new Date().getTime()
    })
    .then(res => {
      history.push(`/app/${res.data.id}`)
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

export const editNote = (id, title, excerpt, content) => dispatch => {
  dispatch(setNoteSaving())
  console.log(excerpt)
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
        type: EDIT_NOTE,
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

export const deleteNote = id => dispatch => {
  axios
    .delete(`/api/notes/${id}`)
    .then(res => {
      return dispatch({
        type: DELETE_NOTE,
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

// Sets Note loading to true
export const setNoteLoading = () => ({
  type: NOTE_LOADING
})

// Sets Note saving to true
export const setNoteSaving = () => ({
  type: NOTE_SAVING
})

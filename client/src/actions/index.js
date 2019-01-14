import axios from 'axios'

export const addNote = () => dispatch => {
  axios
    .post('/api/notes', { title: 'untitled', content: '' })
    .then(res => {
      console.log(res)
      dispatch(selectNote(res.data.id))
      return dispatch({
        type: 'ADD_NOTE',
        payload: res.data
      })
    })
    .catch(err =>
      dispatch({
        type: 'GET_ERRORS',
        payload: err.response.data
      })
    )
}

export const getNotes = () => dispatch => {
  console.log('getNOtes being called')
  axios
    .get('/api/notes')
    .then(res => {
      console.log('Notes recieved')
      return dispatch({
        type: 'GET_NOTES',
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

export const editNote = (id, title, content) => dispatch => {
  console.log('edit note action creator is being called')
  console.log('editing note of id: ', id)
  axios
    .post('/api/notes', { id, title, content })
    .then(res => {
      console.log('POST /api/notes returned success', res)
      return dispatch({
        type: 'EDIT_NOTE',
        payload: res.data
      })
    })
    .catch(err =>
      dispatch({
        type: 'GET_ERRORS',
        payload: err.response.data
      })
    )
}

export const selectNote = id => {
  return {
    type: 'SELECT_NOTE',
    payload: {
      id
    }
  }
}

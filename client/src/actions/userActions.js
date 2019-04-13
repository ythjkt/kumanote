import axios from 'axios'
import setAuthToken from '../utils/setAuthToken'
import jwt_decode from 'jwt-decode'
import { errorActionTypes, userActionTypes } from '../const/actionTypes'

export const registerUser = (userData, history) => dispatch => {
  axios
    .post('/api/users/register', userData)
    .then(res => history.push('/login'))
    .catch(err => {
      dispatch({
        type: errorActionTypes.GET_ERRORS,
        payload: err.data
      })
    })
}

export const loginUser = userData => dispatch => {
  axios
    .post('/api/users/login', userData)
    .then(res => {
      const { token } = res.data

      // Set Token to Local Storage
      localStorage.setItem('jwtToken', token)

      // Set token to Auth Header
      setAuthToken(token)

      const decoded = jwt_decode(token)
      // Set Current User
      dispatch(setCurrentUser(decoded))
    })
    .catch(err =>
      dispatch({
        type: errorActionTypes.GET_ERRORS,
        payload: err.data
      })
    )
}

export const setCurrentUser = decoded => ({
  type: userActionTypes.SET_CURRENT_USER,
  payload: decoded
})

export const logoutUser = () => dispatch => {
  // Remove from localStorage
  localStorage.removeItem('jwtToken')
  // Remove auth header from axios
  setAuthToken(false)
  // Set current user to {}
  dispatch(setCurrentUser({}))
}
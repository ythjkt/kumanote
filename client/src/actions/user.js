import axios from 'axios'
import setAuthToken from '../utils/setAuthToken'
import jwt_decode from 'jwt-decode'

export const registerUser = userData => dispatch => {
  axios
    .post('/api/users/register', userData)
    .then(res => console.log(res.data))
    .catch(err =>
      dispatch({
        type: 'GET_ERRORS',
        payload: err.response.data
      })
    )
}

export const loginUser = userData => dispatch => {
  console.log('inside login user')
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
        type: 'GET_ERRORS',
        payload: err.response.data
      })
    )
}

export const setCurrentUser = decoded => ({
  type: 'SET_CURRENT_USER',
  payload: decoded
})

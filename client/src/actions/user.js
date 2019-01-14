import axios from 'axios'

export const registerUser = userData => dispatch => {
  console.log(userData)
  axios
    .post('/api/users/regiser', userData)
    .then(res => console.log(res.data))
    .catch(err =>
      dispatch({
        type: 'GET_ERRORS',
        payload: err.response.data
      })
    )
}

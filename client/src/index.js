import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'

import jwt_decode from 'jwt-decode'
import setAuthToken from './utils/setAuthToken'
import { setCurrentUser } from './actions/userActions'

import App from './components/App'

const initialState = {}

const middleware = [thunk]

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

// If token exists in localStorage
if (localStorage.jwtToken) {
  // Set auth token header
  setAuthToken(localStorage.jwtToken)
  // Decode token
  const decoded = jwt_decode(localStorage.jwtToken)
  // Set user redux store
  store.dispatch(setCurrentUser(decoded))
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

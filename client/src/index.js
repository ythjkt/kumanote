import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'

import jwt_decode from 'jwt-decode'
import setAuthToken from './utils/setAuthToken'
import { setCurrentUser, logoutUser } from './actions/userActions'

import Routes from './routes'

const initialState = {}

const middleware = [thunk]

// For redux dev tool on Chrome
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
)

// If token exists in localStorage
if (localStorage.jwtToken) {
  // Set auth token header
  setAuthToken(localStorage.jwtToken)
  // Decode token
  const decoded = jwt_decode(localStorage.jwtToken)
  // Set user redux store
  store.dispatch(setCurrentUser(decoded))

  // Check for expired token
  const currentTime = Date.now() / 1000

  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser())
    // TODO Clear note

    // Redirect to home
    window.location.href = '/'
  }
}

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  )
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { createGlobalStyle } from 'styled-components'

// Import Componenets
import PrivateRoute from '../components/common/PrivateRoute'
import Landing from './Landing'
import Dashboard from '../components/Dashboard'
import Register from '../components/Register'
import Login from '../components/Login'
import NoteEditor from './NoteEditor'
import Header from './Header/Header'

const GlobalStyle = createGlobalStyle`
  body {
    color: #111111;
    font-family: 'Open Sans', sans-serif;
  }
`

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <GlobalStyle />
          <Header />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Landing} />
          <PrivateRoute exact path="/app" component={Dashboard} />
          <PrivateRoute exact path="/app/:id" component={NoteEditor} />
        </div>
      </Router>
    )
  }
}

export default App

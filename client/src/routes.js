import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { createGlobalStyle, ThemeProvider } from 'styled-components'

import theme from './const/theme'

// Import Componenets
import PrivateRoute from './containers/auth/PrivateRoute'
import Landing from './components/Landing'
import Dashboard from './components/Dashboard'
import Register from './containers/auth/Register'
import Login from './containers/auth/Login'
import NoteEditor from './containers/note/NoteEditor'
import Header from './containers/header/Header'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: #111111;
    font-family: 'Open Sans', sans-serif;
  }
`

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    )
  }
}

export default App

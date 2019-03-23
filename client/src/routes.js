import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'
import GlobalStyle from './reset.css'

import theme from './const/theme'

// Import Componenets
import PrivateRoute from './containers/auth/PrivateRoute'
import Home from './views/pages/home'
import Dashboard from './components/Dashboard'
import Register from './containers/auth/Register'
import Login from './views/login/'
import NoteEditor from './containers/note/NoteEditor'
import Header from './containers/header'

class Routes extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <div className="app">
            <GlobalStyle />
            <Header />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Home} />
            <PrivateRoute exact path="/app" component={Dashboard} />
            <PrivateRoute exact path="/app/:id" component={NoteEditor} />
          </div>
        </Router>
      </ThemeProvider>
    )
  }
}

export default Routes

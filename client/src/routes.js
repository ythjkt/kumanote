import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'
import GlobalStyle from './reset.css'

import theme from './const/theme'

// Import Componenets
import PrivateRoute from './views/privateRoute/'
import Home from './views/pages/home'
import Dashboard from './views/notes/'
import Register from './views/register'
import Login from './views/login/'
import NoteEditor from './views/note/'
import Header from './views/header'
import NoteHeader from './views/noteHeader'

class Routes extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <div className="app">
            <GlobalStyle />
            <Switch>
              <Route path="/app/:note_id" component={NoteHeader} />
              <Route component={Header} />
            </Switch>
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

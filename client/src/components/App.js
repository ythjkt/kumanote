import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Import Componenets
import PrivateRoute from '../components/common/PrivateRoute'
import Navbar from '../containers/Navbar'
import Landing from './Landing'
import Dashboard from '../components/Dashboard'
import Register from '../components/Register'
import Login from '../components/Login'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Navbar />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Landing} />
          <PrivateRoute exact path="/app" component={Dashboard} />
        </div>
      </Router>
    )
  }
}

App.propTypes = {
  user: PropTypes.object
}

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps)(App)

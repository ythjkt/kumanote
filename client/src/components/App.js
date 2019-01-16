import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Import Componenets
import Navbar from '../containers/Navbar'
import Landing from './Landing'
import Dashboard from '../containers/Dashboard'
import Register from '../components/Register'
import Login from '../components/Login'

class App extends Component {
  render() {
    const isAuthenticated = this.props.user && this.props.user.isAuthenticated

    return (
      <Router>
        <div className="app">
          <Navbar />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Switch>
            {isAuthenticated && <Route exact path="/" component={Dashboard} />}
            <Route exact path="/" component={Landing} />
          </Switch>
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

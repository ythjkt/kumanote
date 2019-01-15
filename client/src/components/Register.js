import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import classnames from 'classnames'

import { connect } from 'react-redux'
import { registerUser } from '../actions/userActions'

class Register extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      password: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors })
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    }

    this.props.registerUser(newUser, this.props.history)
  }
  render() {
    const { errors } = this.state
    return (
      <div>
        <h2>Register</h2>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className={classnames('form', { 'is-invalid': errors.name })}
            value={this.state.name}
            onChange={this.onChange}
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.onChange}
          />
          {errors.email && (
            <div className="invalid-feedback">{errors.email}</div>
          )}
          <input
            type="text"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.onChange}
          />
          {errors.password && (
            <div className="invalid-feedback">{errors.password}</div>
          )}
          <button type="submit">Register</button>
        </form>
      </div>
    )
  }
}

Register.propTypes = {
  user: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  registerUser: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  user: state.user,
  errors: state.errors
})

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register))

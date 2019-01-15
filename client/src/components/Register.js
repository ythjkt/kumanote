import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { registerUser } from '../actions/userActions'

// Components
import TextFieldGroup from './common/TextFieldGroupInput'

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

  componentDidMount() {
    // Redirect if already logged in
    if (this.props.user.isAuthenticated) {
      this.props.history.push('/app')
    }
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
          <TextFieldGroup
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={this.onChange}
            error={errors.name}
          />
          <TextFieldGroup
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.onChange}
            error={errors.email}
          />
          <TextFieldGroup
            type="text"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.onChange}
            error={errors.password}
          />
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
)(Register)

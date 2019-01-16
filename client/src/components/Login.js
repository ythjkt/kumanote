import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loginUser } from '../actions/userActions'

// Components
import TextFieldGroup from './common/TextFieldGroupInput'

class Login extends Component {
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
    if (nextProps.user.isAuthenticated) {
      // redirect to main page
      this.props.history.push('/app')
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps })
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

    this.props.loginUser(newUser)
  }
  render() {
    const { errors } = this.props

    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={this.onSubmit}>
          <TextFieldGroup
            type="text"
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
            type="password"
            value={this.state.password}
            onChange={this.onChange}
            error={errors.password}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    )
  }
}

Login.propTypes = {
  user: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  loginUser: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  user: state.user,
  errors: state.errors
})

export default connect(
  mapStateToProps,
  { loginUser }
)(Login)

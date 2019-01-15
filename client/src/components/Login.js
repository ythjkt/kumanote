import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../actions/userActions'
import classnames from 'classnames'

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
      console.log('loggedin ')
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
          <input
            type="text"
            name="email"
            placeholder="Email"
            className={classnames('form', { 'is-invalid': errors.name })}
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
            className={classnames('form', { 'is-invalid': errors.name })}
            value={this.state.password}
            onChange={this.onChange}
          />
          {errors.password && (
            <div className="invalid-feedback">{errors.password}</div>
          )}
          <button type="submit">Login</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,
  errors: state.errors
})

export default connect(
  mapStateToProps,
  { loginUser }
)(Login)

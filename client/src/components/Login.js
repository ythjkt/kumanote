import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../actions/userActions'

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

  componentWillReceiveProps(nextProps) {
    if (nextProps.user.isAuthenticated) {
      // redirect to main page
      console.log('You are logged already!')
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
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={this.onSubmit}>
          Email
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.onChange}
          />
          Password
          <input
            type="text"
            name="password"
            value={this.state.password}
            onChange={this.onChange}
          />
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

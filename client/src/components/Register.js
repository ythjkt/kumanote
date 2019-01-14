import React, { Component } from 'react'
import { connect } from 'react-redux'
import { registerUser } from '../actions/user'

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

    this.props.registerUser(newUser)

    // axios
    //   .post('/api/users/register', newUser)
    //   .then(res => console.log(res.data))
    //   .catch(err => console.log(err.response.data))
  }
  render() {
    return (
      <div>
        <h2>Register</h2>
        <form onSubmit={this.onSubmit}>
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.onChange}
          />
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
          <button type="submit">Register</button>
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
  { registerUser }
)(Register)

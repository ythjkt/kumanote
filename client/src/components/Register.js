import React, { Component } from 'react'
import axios from 'axios'

class Register extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      password: ''
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
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

    axios
      .post('/api/users/register', newUser)
      .then(res => console.log(res.data))
      .catch(err => console.log(err.response.data))
  }
  render() {
    return (
      <div>
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

export default Register

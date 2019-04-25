import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loginUser } from '../../actions/userActions'

import { Link } from 'react-router-dom'

// Components
import InputGroup from '../../components/inputGroup/'
import { Button } from '../../components/button/'

// Styled Components
import { CenterBlock, CenterBox, StyledForm } from './style'

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
      <CenterBlock>
        <CenterBox>
          <StyledForm onSubmit={this.onSubmit}>
            <InputGroup
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.onChange}
              error={errors.email}
            />
            <InputGroup
              name="password"
              placeholder="Password"
              type="password"
              value={this.state.password}
              onChange={this.onChange}
              error={errors.password}
            />
            <Button type="submit">Login</Button>
          </StyledForm>
          <p>
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </CenterBox>
      </CenterBlock>
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

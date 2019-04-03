import React, { Component } from 'react'
import styled from 'styled-components'

const ToggleNav = styled.div`
  position: relative;
`

export default class DropdownMenu extends Component {
  state = {
    navOpen: false
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside)
  }

  onClick = e => {
    if (!this.state.navOpen) {
      this.setState({ navOpen: true }, () => {
        document.addEventListener('click', this.handleClickOutside)
      })
    } else {
      this.setState({ navOpen: false }, () => {
        document.removeEventListener('click', this.handleClickOutside)
      })
    }
  }

  handleClickOutside = e => {
    e.preventDefault()

    this.setState({ navOpen: false }, () => {
      document.removeEventListener('click', this.handleClickOutside)
    })
  }

  render() {
    const { Button, Menu } = this.props

    return (
      <ToggleNav>
        <div onClick={this.onClick}>
          <Button />
        </div>
        {this.state.navOpen ? <Menu /> : null}
      </ToggleNav>
    )
  }
}
